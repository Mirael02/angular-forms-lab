import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./features/register/register-module').then(m => m.RegisterModule)
  },
  { path: '', redirectTo: 'register', pathMatch: 'full' }
];