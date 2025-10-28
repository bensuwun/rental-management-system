import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
        title: "Dashboard"
    },
    {
        path: 'rentals',
        loadChildren: () => import('./rentals/rentals.module').then(m => m.RentalsModule)
    },
    {
        path: 'payments',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }
];