import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-step-review',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './step-review.html',
  styleUrl: './step-review.scss',
})
export class StepReview {
  @Input() allValues: any;
  @Input() isSubmitting = false;
  @Output() prev = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
}