import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  save(key: string, data: any): void {
    try {
      localStorage.setItem(`draft_${key}`, JSON.stringify({
        data,
        savedAt: new Date().toISOString()
      }));
    } catch (e) {
      // ignore quota errors
    }
  }

  load<T>(key: string): { data: T; savedAt: string } | null {
    try {
      const raw = localStorage.getItem(`draft_${key}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  clear(key: string): void {
    localStorage.removeItem(`draft_${key}`);
  }
}