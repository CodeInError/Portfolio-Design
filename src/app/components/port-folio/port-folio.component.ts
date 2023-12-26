import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.scss']
})
export class PortFolioComponent implements OnInit {

  workPortfolio = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', imageSrc: 'assets/img/portfolio/portfolio-1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2', imageSrc: 'assets/img/portfolio/portfolio-2.jpg' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3', imageSrc: 'assets/img/portfolio/portfolio-3.jpg' },
    { id: 4, title: 'Project 4', description: 'Description for Project 4', imageSrc: 'assets/img/portfolio/portfolio-4.jpg' },
    { id: 5, title: 'Project 5', description: 'Description for Project 5', imageSrc: 'assets/img/portfolio/portfolio-5.jpg' },
    { id: 6, title: 'Project 6', description: 'Description for Project 6', imageSrc: 'assets/img/portfolio/portfolio-6.jpg' },
    { id: 7, title: 'Project 7', description: 'Description for Project 7', imageSrc: 'assets/img/portfolio/portfolio-7.jpg' },
    { id: 8, title: 'Project 8', description: 'Description for Project 8', imageSrc: 'assets/img/portfolio/portfolio-8.jpg' },
    { id: 9, title: 'Project 9', description: 'Description for Project 9', imageSrc: 'assets/img/portfolio/portfolio-9.jpg' },
    // Add more portfolio items as needed
  ];


  activeFilter: string = '*';
  displayBasic2: boolean | any;
  selectedWork: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Function to filter portfolio items based on category
  filterItems(category: string): void {
    this.activeFilter = category;
  }

  showBasicDialog2(index: number) {
    this.displayBasic2 = true;
    this.selectedWork = this.workPortfolio[index];
    console.log('Sameer => this.selectedWork', this.selectedWork);
 }

}
