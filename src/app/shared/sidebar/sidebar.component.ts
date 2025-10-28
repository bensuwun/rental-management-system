import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarCollapsed: boolean = false;

  menuItems: MenuItem[] = [
    { icon: 'icons/home.svg', label: 'Dashboard', route: '/', isOpen: true },
    { icon: 'icons/building.svg', label: 'Rentals', route: '/rentals', isOpen: false },
    { icon: 'icons/cash.svg', label: 'Payments', route: '/payments', isOpen: false }
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
