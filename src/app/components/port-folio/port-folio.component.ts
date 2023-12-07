import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.scss']
})
export class PortFolioComponent implements OnInit {

  portfolioItems = [
    { id: 1, title: 'App 1', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-1.jpg' },
    { id: 2, title: 'App 2', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-2.jpg' },
    { id: 3, title: 'App 3', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-3.jpg' },
    { id: 4, title: 'App 4', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-4.jpg' },
    { id: 5, title: 'App 5', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-5.jpg' },
    { id: 6, title: 'App 6', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-6.jpg' },
    { id: 7, title: 'App 7', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-7.jpg' },
    { id: 8, title: 'App 8', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-8.jpg' },
    { id: 9, title: 'App 9', category: 'filter-app', imageSrc: 'assets/img/portfolio/portfolio-9.jpg' },
    // Add more portfolio items as needed
  ];

  activeFilter: string = '*';

  constructor() { }

  ngOnInit(): void {
  }

  // Function to filter portfolio items based on category
  filterItems(category: string): void {
    this.activeFilter = category;
  }

}
