import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: any[] = [
    { name: 'Angular', percentage: 87 },
    { name: 'Typescript', percentage: 70 },
    { name: 'Firebase', percentage: 60 },
    {name: 'HTML+CSS', percentage: 65},
    {name: 'Database(MongoDB,mysql)', percentage: 70},
    {name: 'Bootstrap', percentage: 75},
    {name: 'JavaScript', percentage: 75},
    {name: 'Node + Express', percentage: 50},
    {name: 'Rxjs + lodash', percentage: 80},
    {name: 'Agile methodlogy', percentage: 75},
    {name: 'git', percentage: 85},
    {name: 'Primeng', percentage: 100},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
