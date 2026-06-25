import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface UserProfile {
  id: string;
  accountType: 'personal' | 'business';
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  companyName?: string;
  npwp?: string;
  businessSector?: string;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  private profile: UserProfile = {
    id: 'usr-001',
    accountType: 'personal',
    fullName: 'Budi Santoso',
    email: 'budi@example.com',
    phone: '081234567890',
    bio: 'Mahasiswa Politeknik Negeri Malang.'
  };

  getProfile(): Observable<UserProfile> {
    // Simulasi network delay yang realistis (200-300ms)
    return of(this.profile).pipe(delay(250)); 
  }

  isEmailTaken(email: string): Observable<boolean> {
    const taken = ['admin@test.com', 'root@poltek.ac.id', 'noreply@system.com'];
    // Delay lebih cepat untuk UX yang lebih responsif
    return of(taken.includes(email.toLowerCase())).pipe(delay(300));
  }

  saveProfile(data: Partial<UserProfile>): Observable<void> {
    Object.assign(this.profile, data);
    // Simulasi save yang lebih cepat
    return of(undefined).pipe(delay(500));
  }
}