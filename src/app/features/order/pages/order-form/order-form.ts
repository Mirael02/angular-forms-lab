import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { debounceTime, takeUntil, startWith, map, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';

import { ProductService, Product } from '../../services/product';
import { DraftService } from '../../../../core/services/draft.service';
import { OrderSummary } from '../../components/order-summary/order-summary';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

const DRAFT_KEY = 'order_form';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    OrderSummary
  ],
  templateUrl: './order-form.html'
})
export class OrderForm implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private productSvc = inject(ProductService);
  private draftSvc = inject(DraftService);
  private snackBar = inject(MatSnackBar);
  
  private destroys = new Subject<void>();
  
  orderForm!: FormGroup;
  lastSaved: Date | null = null;
  isSaving = false;
  
  searchResults: { [index: number]: Product[] } = {};
  searchLoading: { [index: number]: boolean } = {};
  
  grandTotal$!: Observable<number>;

  ngOnInit() {
    this.buildForm();
    this.tryRestoreDraft();
    this.setupAutoSave();
    this.setupReactiveTotal();
    
    if (this.items.length > 0) {
      this.setupItemSearch(0);
    }
  }

  buildForm() {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      customerPhone: ['', [Validators.required, Validators.pattern(/^08[0-9]{8,11}$/)]],
      deliveryAddress: ['', Validators.required],
      items: this.fb.array([
        this.createItemRow()
      ])
    });
  }

  createItemRow(data?: any): FormGroup {
    return this.fb.group({
      productSearch: [data?.productSearch || ''],
      productId: [data?.productId || '', Validators.required],
      productName: [data?.productName || ''],
      unitPrice: [data?.unitPrice || 0, [Validators.required, Validators.min(1)]],
      quantity: [data?.quantity || 1, [Validators.required, Validators.min(1), Validators.max(999)]],
      discount: [data?.discount || 0, [Validators.min(0), Validators.max(100)]]
    });
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  get itemGroups(): FormGroup[] {
    return this.items.controls as FormGroup[];
  }

  addItem() {
    const newIndex = this.items.length;
    this.items.push(this.createItemRow());
    this.setupItemSearch(newIndex);
  }

  removeItem(i: number) {
    if (this.items.length === 1) return;
    this.items.removeAt(i);
    delete this.searchResults[i];
  }

  setupReactiveTotal() {
    this.grandTotal$ = this.items.valueChanges.pipe(
      startWith(this.items.value),
      map((rows: any[]) => {
        return rows.reduce((total, row) => {
          const price = Number(row.unitPrice) || 0;
          const qty = Number(row.quantity) || 0;
          const discount = Number(row.discount) || 0;
          const subtotal = price * qty;
          const discAmt = subtotal * (discount / 100);
          return total + (subtotal - discAmt);
        }, 0);
      })
    );
  }

  getRowSubtotal(i: number): number {
    const row = this.items.at(i).value;
    const price = Number(row.unitPrice) || 0;
    const qty = Number(row.quantity) || 0;
    const discount = Number(row.discount) || 0;
    const subtotal = price * qty;
    return subtotal - (subtotal * (discount / 100));
  }

  setupItemSearch(index: number) {
    const searchCtrl = this.items.at(index).get('productSearch');
    if (!searchCtrl) return;
    
    searchCtrl.valueChanges.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(query => {
        this.searchLoading[index] = true;
        return this.productSvc.searchProducts(query || '');
      }),
      takeUntil(this.destroys)
    ).subscribe(products => {
      this.searchLoading[index] = false;
      this.searchResults[index] = products;
    });
  }

  selectProduct(index: number, product: Product) {
    const row = this.items.at(index);
    row.patchValue({
      productId: product.id,
      productName: product.title,
      unitPrice: this.productSvc.toIDR(product.price),
      productSearch: product.title
    });
    this.searchResults[index] = [];
  }

  setupAutoSave() {
    this.orderForm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      filter(() => this.orderForm.dirty),
      takeUntil(this.destroys)
    ).subscribe(value => {
      this.isSaving = true;
      this.draftSvc.save(DRAFT_KEY, value);
      this.lastSaved = new Date();
      this.isSaving = false;
    });
  }

  tryRestoreDraft() {
    const draft = this.draftSvc.load<any>(DRAFT_KEY);
    if (!draft) return;

    const savedAt = new Date(draft.savedAt);
    const minutesAgo = (Date.now() - savedAt.getTime()) / 60000;
    
    if (minutesAgo > 60) {
      this.draftSvc.clear(DRAFT_KEY);
      return;
    }

    const restore = confirm(`Ditemukan draft tersimpan pada ${savedAt.toLocaleString()}.\nPulihkan data draft?`);
    if (!restore) {
      this.draftSvc.clear(DRAFT_KEY);
      return;
    }

    const savedItems: any[] = draft.data.items || [];
    while (this.items.length < savedItems.length) {
      this.items.push(this.createItemRow());
      this.setupItemSearch(this.items.length - 1);
    }

    this.orderForm.patchValue(draft.data);
    this.lastSaved = savedAt;
    this.snackBar.open('Draft berhasil dipulihkan', 'OK', { duration: 3000 });
  }

  clearDraft() {
    this.draftSvc.clear(DRAFT_KEY);
    this.orderForm.reset();
    this.lastSaved = null;
    while (this.items.length > 1) {
      this.items.removeAt(1);
    }
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    console.log('Order:', this.orderForm.getRawValue());
    this.draftSvc.clear(DRAFT_KEY);
    this.snackBar.open('Pesanan berhasil dibuat!', 'OK', { duration: 4000 });
    this.clearDraft();
  }

  ngOnDestroy() {
    this.destroys.next();
    this.destroys.complete();
  }
}