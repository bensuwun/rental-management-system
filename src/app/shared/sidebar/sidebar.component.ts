import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarCollapsed: boolean = false;

  menuItems: MenuItem[] = [
    { icon: 'icons/home.svg', label: 'Dashboard', isOpen: false },
    { icon: 'icons/building.svg', label: 'Rentals', isOpen: false },
    { icon: 'icons/cash.svg', label: 'Payments', isOpen: false }
  ]

  selectMenuItem(item: MenuItem): void {
    console.log(item);
    item.isOpen = true;
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {
        menuItem.isOpen = false;
      }
    });
  }
}
