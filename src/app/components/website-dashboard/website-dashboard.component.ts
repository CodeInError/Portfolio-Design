import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-dashboard',
  templateUrl: './website-dashboard.component.html',
  styleUrls: ['./website-dashboard.component.scss']
})
export class WebsiteDashboardComponent implements OnInit {
  showTemplatePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  LoginPageRedirect(){
    this.router.navigate(['/login']);
  }

  showTemplates(){
    this.showTemplatePage = true;
  }

  setElements(){
    this.router.navigate(['websiteDashboard/elements']);
  }

}
