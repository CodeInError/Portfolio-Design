import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-elements',
  templateUrl: './website-elements.component.html',
  styleUrls: ['./website-elements.component.scss']
})
export class WebsiteElementsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly ENTER = 13; // Use the actual key code for ENTER
  readonly COMMA = 188; // Use the actual key code for COMMA
  readonly separatorKeysCodes: number[] = [this.ENTER, this.COMMA];
  addLinks: Link[] = [
    { name: 'html' },
    { name: 'css' },
    { name: 'Angular' },
    { name: 'nodeJS' },
  ];

  selectedOption: string = 'solid'; // Track the selected option
  selectedColor: string = '#000';
  colors: string[] = ['#000','#3a3844', '#4d4730', '#f4ead8','#cf6b87','#5d2a42','#71719a','#6a8b7c','#fcb1a6',
                      '#dd7373','#aea3b0', '#29335c', '#114b5f', '#028090', '#a23b72', '#eaf0ce','#c0c5c1', '#7d8491',
                      '#f7d4bc'];
  gradientColors: string[] = [
                        'linear-gradient(109.1deg, rgb(181, 73, 91) 7.1%, rgb(225, 107, 140) 86.4%)',
                        'linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)',
                        'linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)',
                        'linear-gradient(0deg, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)',
                        'radial-gradient(939px at 94.7% 50%, rgb(0, 178, 169) 0%, rgb(0, 106, 101) 76.9%)',
                        'linear-gradient(90deg, rgb(43, 77, 130) 0%, rgb(40, 144, 172) 100%)',
                        'linear-gradient(45deg, rgb(217, 134, 15) 0%, rgb(225, 99, 66) 100%)',
                        'linear-gradient(135deg, rgb(245, 177, 77) 0%, rgb(237, 53, 115) 100%)'
                      ];
selectedGradient: string | any;
gradientL: any;
showElementPage = true;
showCustomizePage =false;
showDominPage =false;
activeSection: string = 'element';
cardsData = [
  { title: 'Card 1', imageSrc: 'assets/img/card-1.webp' },
  { title: 'Card 2', imageSrc: 'assets/img/card-2.webp' },
  { title: 'Card 3', imageSrc: 'assets/img/card-3.webp' },
  { title: 'Card 4', imageSrc: 'assets/img/card-4.webp' },
  { title: 'Card 4', imageSrc: 'assets/img/card-5.webp' },
  { title: 'Card 4', imageSrc: 'assets/img/card-6.webp' },
  { title: 'Card 4', imageSrc: 'assets/img/card-1.webp' },
  // Add more cards as needed
];

cardArray(array: any[], cardSize: number): any[] {
  const cards = [];
  for (let i = 0; i < array.length; i += cardSize) {
    cards.push(array.slice(i, i + cardSize));
  }
  console.log('Sameer => cards ', cards);
  return cards;
}


  constructor(private router: Router) { }

  ngOnInit(): void {
    // Your initialization logic here
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add a fruit if a value is entered
    if (value?.trim()) {
      this.addLinks.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(Links: Link): void {
    const index = this.addLinks.indexOf(Links);

    if (index >= 0) {
      this.addLinks.splice(index, 1);
    }
  }

  showDesignArea(option: string): void {
    this.selectedOption = option;
  }

  selectColor(color: string): void {
    console.log('Sameer => color', color);
    this.selectedColor = color;
  }

  selectGradient(gradient: string): void {
    console.log('Selected Gradient:', gradient);
    this.selectedColor = gradient;
  }

  onSelectCard(card : any){
    console.log('Sameer => card', card);
    this.selectedColor = `url(${card.imageSrc}) no-repeat center / cover`
  }

  goToELementPage(){
    this.activeSection = 'element';
    this.showElementPage = true;
    this.showCustomizePage = false;
    this.showDominPage = false;
  }

  goToCustomizePage(){
    this.activeSection = 'customize';
    this.showElementPage = false;
    this.showCustomizePage = true;
    this.showDominPage = false;
  }

  goToDominPage(){
    this.activeSection = 'domain';
    this.showElementPage = false;
    this.showCustomizePage = false;
    this.showDominPage = true;
  }
}

// Define the Fruit type using TypeScript interface
interface Link {
  name: string;
}
