import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private base = 'https://dummyjson.com/products';

  // Cache categories dengan shareReplay
  private allProducts$ = this.http.get<{ products: Product[] }>(this.base + '?limit=100')
    .pipe(
      map(res => res.products),
      shareReplay(1) // Request hanya 1x, di-share ke semua subscriber
    );

  // Search produk untuk live search di order item
  searchProducts(query: string): Observable<Product[]> {
    if (!query || query.length < 2) {
      return this.allProducts$.pipe(map(p => p.slice(0, 8)));
    }
    return this.http.get<{ products: Product[] }>(`${this.base}/search?q=${query}&limit=8`)
      .pipe(
        map(res => res.products),
        catchError(() => of([]))
      );
  }

  // Harga IDR (simulasi: USD * 15.500)
  toIDR(usd: number): number {
    return Math.round(usd * 15500);
  }
}