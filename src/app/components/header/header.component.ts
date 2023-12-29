import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayLoginDialog: boolean = false;
  public isNavbarCollapsed = true;
  username: string | any;
  password: string | any;
errorMessage: any;

  constructor() { }

  ngOnInit(): void {
    const customToggler = document.querySelector('.custom-toggler') as HTMLElement;
    const navbarNav = document.querySelector('#navbarNav') as HTMLElement;

    customToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('show');
    });

  }

  goToLogin(){
    this.displayLoginDialog = true;
  }

}
