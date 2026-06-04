import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NimAsync {
  // Simulasi NIM yang sudah mendaftar beasiswa
  private registeredNims = ['123456', '654321', '112233'];

  checkNim(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      if (!ctrl.value || ctrl.value.length < 6) return of(null);
      return timer(500).pipe(
        switchMap(() => {
          const isTaken = this.registeredNims.includes(ctrl.value);
          return of(isTaken);
        }),
        map(isTaken => isTaken ? { nimRegistered: true } : null),
        catchError(() => of(null))
      );
    };
  }
}