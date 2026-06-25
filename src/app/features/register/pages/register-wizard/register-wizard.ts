import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Import Custom Validator
import { strongPasswordValidator, passwordMatchValidator, nikValidator, noWhitespaceValidator } from '../../../../core/validators/password.validator';
import { UsernameAsync } from '../../../../core/validators/username-async';

// Import Child Components
import { StepPersonal } from '../step-personal/step-personal';
import { StepAccount } from '../step-account/step-account';
import { StepReview } from '../step-review/step-review';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    StepPersonal,
    StepAccount,
    StepReview
  ],
  templateUrl: './register-wizard.html',
  styleUrl: './register-wizard.scss',
})
export class RegisterWizard implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private uaVal = inject(UsernameAsync);

  currentStep = 0;
  isSubmitting = false;

  personalForm!: FormGroup;
  accountForm!: FormGroup;

  ngOnInit() {
    this.personalForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator()]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      nik: ['', [Validators.required, nikValidator()]],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^08[0-9]{8,11}$/)]]
    });

    this.accountForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_]+$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator('password', 'confirmPassword') });
  }

  nextStep() {
    const form = this.currentStep === 0 ? this.personalForm : this.accountForm;
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  get allValues() {
    return {
      ...this.personalForm.value,
      ...this.accountForm.value
    };
  }

  onSubmit() {
    if (this.personalForm.invalid || this.accountForm.invalid) return;
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.snackBar.open('Registrasi berhasil!', 'OK', { duration: 3000 });
      this.router.navigate(['/account']);
    }, 1500);
  }
}