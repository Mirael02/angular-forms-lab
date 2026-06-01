import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./features/register/register-module').then(m => m.RegisterModule)
  },
  { 
    path: 'order', 
    loadComponent: () => import('./features/order/pages/order-form/order-form').then(c => c.OrderForm) 
  },
  { 
    path: 'account', 
    loadComponent: () => import('./features/account/pages/account-settings/account-settings').then(c => c.AccountSettings) 
  },
  { path: '', redirectTo: 'account', pathMatch: 'full' }  
];