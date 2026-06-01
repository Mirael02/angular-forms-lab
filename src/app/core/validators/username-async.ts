import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsernameAsync {
  // Daftar username terpakai untuk simulasi
  private taken = ['admin', 'user', 'test', 'root', 'politeknik'];

  constructor(private http: HttpClient) {}

  checkAvailability(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      if (!ctrl.value || ctrl.value.length < 3) return of(null);

      return timer(600).pipe( // Debounce 600ms
        switchMap(() => {
          // Simulasi pengecekan ke "database"
          const isTaken = this.taken.includes(ctrl.value.toLowerCase());
          return of(isTaken);
        }),
        map(isTaken => isTaken ? { usernameTaken: true } : null),
        catchError(() => of(null)) // Anggap valid jika API error
      );
    };
  }
}