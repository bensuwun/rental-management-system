import { Component } from '@angular/core';
import { PropertyUnitsComponent } from '../property-units/property-units.component';

@Component({
  selector: 'app-rental-dashboard',
  standalone: true,
  imports: [
    PropertyUnitsComponent,
  ],
  templateUrl: './rental-dashboard.component.html',
  styleUrl: './rental-dashboard.component.scss'
})
export class RentalDashboardComponent {
}
