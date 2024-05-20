import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  darkModeEnabled = false;
  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    console.log('Dark mode enabled:', this.darkModeEnabled);
  }
}
