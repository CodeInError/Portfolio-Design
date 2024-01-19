import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hideInLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // List of routes where you want to hide the footer, use , then add their path
      const routesToHideFooter = ['/login', '/ownPage', '/websiteDashboard'];
      this.hideInLoginPage = routesToHideFooter.includes(event.url);
    });
  }
}

