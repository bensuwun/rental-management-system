import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-dashboard',
  standalone: true,
  imports: [
    PropertyCardComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './rental-dashboard.component.html',
  styleUrl: './rental-dashboard.component.scss'
})
export class RentalDashboardComponent {

}
