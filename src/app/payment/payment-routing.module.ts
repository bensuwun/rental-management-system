import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PaymentDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
