import { Routes } from '@angular/router';
import { WizardDeactivateGuard } from './core/guards/wizard-deactivate';

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
  {
    path: 'scholarship',
    loadComponent: () => import('./features/scholarship/pages/scholarship-wizard/scholarship-wizard').then(c => c.ScholarshipWizard),
    canDeactivate:  [WizardDeactivateGuard]
  },
  { path: '', redirectTo: 'register', pathMatch: 'full' }  
];