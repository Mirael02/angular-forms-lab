import { Component, OnInit, AfterViewInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, timer, of } from 'rxjs';
import { switchMap, map, catchError, startWith, distinctUntilChanged } from 'rxjs/operators';

import { AccountService, UserProfile } from '../../services/account';
import { noWhitespaceValidator } from '../../../../core/validators/password.validator';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.scss'],
  host: { 'ngSkipHydration': 'true' }
})
export class AccountSettings implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  private accountSvc = inject(AccountService);
  private destroyRef = inject(DestroyRef);

  settingsForm!: FormGroup;
  isLoading = true;
  isSaving = false;
  canSave = false;
  saveSuccess = false;

  private currentEmail = '';
  private initialized = false;

  ngOnInit() {
    this.buildForm();
  }

  ngAfterViewInit() {
    this.markInitialized();
    this.setupConditionalFields();
    this.setupSaveButton();
    this.loadProfile();
  }

  private markInitialized() {
    this.initialized = true;
  }

  buildForm() {
    this.settingsForm = this.fb.group({
      accountType: ['personal', Validators.required],
      fullName: ['', [Validators.required, noWhitespaceValidator()]],
      email: ['', [Validators.required, Validators.email], [this.asyncEmailValidator()]],
      phone: ['', [Validators.required, Validators.pattern(/^08[0-9]{8,11}$/)]],
      bio: ['', Validators.maxLength(200)],
      business: this.fb.group({
        companyName: [''],
        npwp: [''],
        businessSector: ['']
      })
    }, { updateOn: 'blur' });
  }

  get accountType() { return this.settingsForm.get('accountType'); }
  get emailCtrl() { return this.settingsForm.get('email'); }
  get businessGrp() { return this.settingsForm.get('business') as FormGroup; }
  get isBusiness() { return this.accountType?.value === 'business'; }

  loadProfile() {
    this.isLoading = true;
    this.accountSvc.getProfile().subscribe({
      next: (profile) => {
        this.currentEmail = profile.email;

        this.settingsForm.patchValue({
          accountType: profile.accountType,
          fullName: profile.fullName,
          email: profile.email,
          phone: profile.phone,
          bio: profile.bio || '',
          business: {
            companyName: profile.companyName || '',
            npwp: profile.npwp || '',
            businessSector: profile.businessSector || ''
          }
        });

        this.settingsForm.markAsPristine();
        this.settingsForm.markAsUntouched();
        
        this.isLoading = false; 
      },
      error: (err) => {
        console.error('Gagal memuat profil', err);
        this.isLoading = false;
      }
    });
  }

  asyncEmailValidator() {
    return (ctrl: AbstractControl): Observable<any> => {
      const email = ctrl.value;
      if (!email || email === this.currentEmail || !email.includes('@')) {
        return of(null);
      }

      return timer(700).pipe(
        switchMap(() => this.accountSvc.isEmailTaken(email).pipe(
          map(taken => taken ? { emailTaken: true } : null),
          catchError(() => of(null))
        ))
      );
    };
  }

  setupConditionalFields() {
    this.accountType!.valueChanges.pipe(
      startWith(this.accountType!.value),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((type: string) => {
      const bizGroup = this.businessGrp;
      if (type === 'business') {
        bizGroup.get('companyName')!.setValidators([Validators.required, Validators.minLength(3)]);
        bizGroup.get('npwp')!.setValidators([
          Validators.required,
          Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\.\d{1}-\d{3}\.\d{3}$/)
        ]);
        bizGroup.get('businessSector')!.setValidators(Validators.required);
        bizGroup.enable();
      } else {
        bizGroup.clearValidators();
        bizGroup.get('companyName')!.clearValidators();
        bizGroup.get('npwp')!.clearValidators();
        bizGroup.get('businessSector')!.clearValidators();
        bizGroup.reset();
        bizGroup.disable();
      }
      bizGroup.updateValueAndValidity();
    });
  }

  setupSaveButton() {
    this.settingsForm.statusChanges.pipe(
      startWith(this.settingsForm.status),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(status => {
      this.canSave = status === 'VALID' && this.settingsForm.dirty;
    });
  }

  onSave() {
    if (!this.canSave || this.isSaving) return;
    this.isSaving = true;

    const raw = this.settingsForm.getRawValue();
    const payload: Partial<UserProfile> = {
      accountType: raw.accountType,
      fullName: raw.fullName,
      email: raw.email,
      phone: raw.phone,
      bio: raw.bio,
      ...(raw.accountType === 'business' ? raw.business : {})
    };

    this.accountSvc.saveProfile(payload).subscribe({
      next: () => {
        this.currentEmail = raw.email;
        this.settingsForm.markAsPristine();
        this.canSave = false;
        this.saveSuccess = true;
        this.isSaving = false;
        setTimeout(() => this.saveSuccess = false, 3000);
      },
      error: (err) => {
        console.error('Save error:', err);
        this.isSaving = false;
      }
    });
  }
}