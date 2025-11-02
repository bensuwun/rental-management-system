import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { RentalDashboardComponent } from './rental-dashboard/rental-dashboard.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    title: "Rentals",
    component: RentalDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }
