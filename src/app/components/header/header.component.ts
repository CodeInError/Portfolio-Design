import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayLoginDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.displayLoginDialog = true;
  }

}
