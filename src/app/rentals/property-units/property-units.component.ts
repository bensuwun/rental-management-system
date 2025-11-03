import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-property-units',
  imports: [
    PropertyCardComponent,
    MatPaginator
  ],
  templateUrl: './property-units.component.html',
  styleUrl: './property-units.component.scss'
})
export class PropertyUnitsComponent {
  pageSizeOptions = [5, 10, 25, 100];
}
