import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { DraftService } from '../../../../core/services/draft.service';
import { NimAsync } from '../../../../core/validators/nim-async';
import { nikValidator, noFutureYearValidator } from '../../../../core/validators/password.validator';

const DRAFT_KEY = 'scholarship_draft';

@Component({
  selector: 'app-scholarship-wizard',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatProgressBarModule, 
    MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule
  ],
  templateUrl: './scholarship-wizard.html'
})
export class ScholarshipWizard implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private draftSvc = inject(DraftService);
  private snackBar = inject(MatSnackBar);
  private nimAsync = inject(NimAsync);
  private destroys = new Subject<void>();

  scholarshipForm!: FormGroup;
  currentStep = 0;
  isSubmitting = false;
  lastSaved: Date | null = null;
  
  ngOnInit() {
    this.buildForm();
    this.tryRestoreDraft();
    this.setupAutoSave();
  }

  buildForm() {
    this.scholarshipForm = this.fb.group({
      step1: this.fb.group({
        namaLengkap: ['', Validators.required],
        nik: ['', [Validators.required, nikValidator()]],
        nim: ['', Validators.required, [this.nimAsync.checkNim()]],
        ipk: ['', [Validators.required, Validators.min(3.0), Validators.max(4.0)]],
        semester: ['', [Validators.required, Validators.min(3), Validators.max(8)]]
      }),
      step2: this.fb.group({
        prestasi: this.fb.array([this.createPrestasiGroup()])
      }),
      step3: this.fb.group({
        essay: ['', [Validators.required, Validators.minLength(100)]]
      })
    });
  }

  // --- FormArray Logic (Step 2) ---
  get prestasiArray(): FormArray {
    return this.scholarshipForm.get('step2.prestasi') as FormArray;
  }

  createPrestasiGroup(): FormGroup {
    return this.fb.group({
      namaPrestasi: ['', Validators.required],
      tahun: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/), noFutureYearValidator()]],
      tingkat: ['', Validators.required],
      urlBukti: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]]
    });
  }

  addPrestasi() {
    if (this.prestasiArray.length < 10) {
      this.prestasiArray.push(this.createPrestasiGroup());
    }
  }

  removePrestasi(index: number) {
    if (this.prestasiArray.length > 1) {
      this.prestasiArray.removeAt(index);
    }
  }

  // --- Navigasi & Auto-save ---
  get currentGroup(): FormGroup {
    const stepKeys = ['step1', 'step2', 'step3'];
    return this.scholarshipForm.get(stepKeys[this.currentStep]) as FormGroup;
  }

  nextStep() {
    if (this.currentGroup.invalid) {
      this.currentGroup.markAllAsTouched();
      return;
    }
    this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  setupAutoSave() {
    this.scholarshipForm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      filter(() => this.scholarshipForm.dirty),
      takeUntil(this.destroys)
    ).subscribe(value => {
      this.draftSvc.save(DRAFT_KEY, value);
      this.lastSaved = new Date();
    });
  }

  tryRestoreDraft() {
    const draft = this.draftSvc.load<any>(DRAFT_KEY);
    if (!draft) return;
    
    if (confirm('Ditemukan draft pengajuan beasiswa. Pulihkan data?')) {
      const savedPrestasi = draft.data?.step2?.prestasi || [];
      while (this.prestasiArray.length < savedPrestasi.length) {
        this.prestasiArray.push(this.createPrestasiGroup());
      }
      this.scholarshipForm.patchValue(draft.data);
      this.snackBar.open('Draft berhasil dipulihkan', 'OK', { duration: 3000 });
    } else {
      this.draftSvc.clear(DRAFT_KEY);
    }
  }

  hasUnsavedChanges(): boolean {
    return this.scholarshipForm.dirty;
  }

  onSubmit() {
    if (this.scholarshipForm.invalid) return;
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.draftSvc.clear(DRAFT_KEY);
      this.scholarshipForm.reset();
      this.scholarshipForm.markAsPristine();
      this.currentStep = 0;
      this.snackBar.open('Pengajuan Beasiswa Berhasil Dikirim!', 'OK', { duration: 4000 });
    }, 2000);
  }

  ngOnDestroy() {
    this.destroys.next();
    this.destroys.complete();
  }
}