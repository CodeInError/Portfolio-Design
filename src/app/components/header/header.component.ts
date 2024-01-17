import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayLoginDialog: boolean = false;
  showSignupLogin: boolean = false;
  public isNavbarCollapsed = true;
  username: string | any;
  password: string | any;
  errorMessage: any;

  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  goToLogin(){
    // this.displayLoginDialog = true;
    this.router.navigate(['/login']);
    this.showSignupLogin = true;
  }

}
