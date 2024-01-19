import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayLoginDialog: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    // this.displayLoginDialog = true;
    this.router.navigate(['/websiteDashboard']);
  }

}
