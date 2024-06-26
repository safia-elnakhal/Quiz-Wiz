import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizwiz';
  constructor(private spinner: NgxSpinnerService) {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  darkModeEnabled = false;

  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
  }
}
