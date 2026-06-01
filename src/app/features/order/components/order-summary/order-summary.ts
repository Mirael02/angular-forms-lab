import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './order-summary.html',
})
export class OrderSummary {
  @Input() total!: Observable<number>;
}