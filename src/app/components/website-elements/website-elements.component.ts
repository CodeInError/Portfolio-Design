import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-elements',
  templateUrl: './website-elements.component.html',
  styleUrls: ['./website-elements.component.scss']
})
export class WebsiteElementsComponent implements OnInit {

  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  constructor() { }

  ngOnInit(): void {
  }

}
