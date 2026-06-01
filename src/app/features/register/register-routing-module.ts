import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWizard } from './pages/register-wizard/register-wizard';

const routes: Routes = [
  { path: '', component: RegisterWizard }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }