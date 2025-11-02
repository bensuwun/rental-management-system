import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
  @Input() activeRoute: string = '';
  @Input() isSidebarCollapsed: boolean = false;

  menuItems: MenuItem[] = [
    { icon: 'icons/home.svg', label: 'Dashboard', route: '/', isOpen: false },
    { icon: 'icons/building.svg', label: 'Rentals', route: '/rentals', isOpen: false },
    { icon: 'icons/cash.svg', label: 'Payments', route: '/payments', isOpen: false }
  ]

  selectMenuItem(item: MenuItem): void {
    item.isOpen = true;
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {  
        menuItem.isOpen = false;
      }
    });
  }
}
