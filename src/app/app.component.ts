import { Component } from '@angular/core';
import { Router, Event, RouterEvent, RouterOutlet, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSidebarCollapsed = false;
  navbarTitle = "Dashboard";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.pipe(
       filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      // Change the title based on the current route.
      if (e.url === '/rentals') {
        this.navbarTitle = 'Rentals';
      } else if (e.url === '/payments') {
        this.navbarTitle = 'Payments';
      } else {
        this.navbarTitle = 'Dashboard';
      }
    });
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
