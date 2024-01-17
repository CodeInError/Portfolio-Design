import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  forgetPageVisible: false | any;
  createAccountVisible: false | any;
  forgetEMailAddress : false | any;
  cities: any;
  selectedCity1: string | any;

  constructor() {

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.forgetPageVisible = true;
  }

  createAccount(){
    this.forgetPageVisible = false;
    this.createAccountVisible =true;
  }

  Login(){
    this.forgetPageVisible = false;
    this.createAccountVisible =false;
  }

  forgetEmail(){
    this.forgetEMailAddress = true;
  }

}
