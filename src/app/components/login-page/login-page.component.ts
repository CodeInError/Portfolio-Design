import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  forgetPageVisible: false | any
  createAccountVisible: false | any

  constructor() { }

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

}
