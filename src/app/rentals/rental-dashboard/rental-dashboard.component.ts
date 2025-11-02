import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';

@Component({
  selector: 'app-rental-dashboard',
  standalone: true,
  imports: [
    PropertyCardComponent
  ],
  templateUrl: './rental-dashboard.component.html',
  styleUrl: './rental-dashboard.component.scss'
})
export class RentalDashboardComponent {

}
