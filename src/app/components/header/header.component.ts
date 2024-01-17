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
    const customToggler = document.querySelector('.custom-toggler') as HTMLElement;
    const navbarNav = document.querySelector('#navbarNav') as HTMLElement;

    customToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });

  }

  goToLogin(){
    // this.displayLoginDialog = true;
    this.router.navigate(['/login']);
    this.showSignupLogin = true;
  }

}
