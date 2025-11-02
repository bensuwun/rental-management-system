import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RentalDashboardComponent } from './rentals/rental-dashboard/rental-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: "Dashboard",
        component: DashboardComponent,
    },
    {
        path: 'rentals',
        loadChildren: () => import('./rentals/rentals.module').then(m => m.RentalsModule),
    },
    {
        path: 'payments',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }
];