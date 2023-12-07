import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  portfolioItems = [
    { id: 1, img:'assets/img/portfolio/portfolio-1.jpg', title: 'App 1', category: 'Web design', client: 'ASU Company', projectDate: '01 March, 2020', projectURL: 'https://www.example.com', description: 'Description for App 1' },
    { id: 2, img:'assets/img/portfolio/portfolio-2.jpg', title: 'App 2', category: 'Card', client: 'XYZ Corp', projectDate: '15 April, 2021', projectURL: 'https://www.xyz.com', description: 'Description for App 2' },
    // Add more portfolio items as needed
  ];

  activeItemId: number = 1; // Default to the first item

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = +params['id']; // Convert to number
      this.activeItemId = itemId || this.activeItemId; // Use the provided id or default to the first item
    });
  }

}
