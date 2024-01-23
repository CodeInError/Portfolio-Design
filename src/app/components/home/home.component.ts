import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayLoginDialog: boolean = false;
  showLoader = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    // Display the loader
    this.showLoader = true;

    // Set a timeout to hide the loader after 2000 milliseconds (adjust the duration as needed)
    setTimeout(() => {
      this.showLoader = false;

      // Navigate to the Dashboard
      this.router.navigate(['/websiteDashboard']);
    }, 2000);
  }

}
