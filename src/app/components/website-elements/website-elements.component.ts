import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { SessionStorageService } from '../services/SessionService/session-storage.service';

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
  selectedColor: string = '';
  selectedColorGradient: string ='';
  selectedColorPicker: string ='';
  selectedGridentColorPicker: string ='';
  selectedImageURL: any = '';
  selectedPhotoURL: any = '';
  name: string = '';
  jobTitle: string ='';
  text2: string = '';
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
  { title: 'Card 1', imageSrc: 'assets/img/SL-1.jpg' },
  { title: 'Card 3', imageSrc: 'assets/img/SL-2.jpg' },
  { title: 'Card 4', imageSrc: 'assets/img/SL-3.jpg' },
  { title: 'Card 4', imageSrc: 'assets/img/SL-4.jpg' },
  { title: 'Card 4', imageSrc: 'assets/img/SL-5.jpg' },
  { title: 'Card 4', imageSrc: 'assets/img/SL-6.jpg' },
  { title: 'Card 4', imageSrc: 'assets/img/SL-7.jpg' },
  // Add more cards as needed
];
colorPicker: any;
gradient: string | any;
selectDesignValue = {
  colorValue: '',
  nameInputValue: '',
  jobInputValue: '',
  headerColorValue:'',
  profilePhotoURL: '',
  introText:''
};
enterName: any;
enterJobTitle: any;
selectHeaderColor: any;
gradientColor1: string = '#ffffff'; // Default color 1
gradientColor2: string = '#000000'; // Default color 2
gradientDegree: number = 0;
Headergradient: any;
color: any;
profilePhoto: any;
text: any;
editorContent: any;
cardArray(array: any[], cardSize: number): any[] {
  const cards = [];
  for (let i = 0; i < array.length; i += cardSize) {
    cards.push(array.slice(i, i + cardSize));
  }
  console.log('Sameer => cards ', cards);
  return cards;
}

  constructor(private router: Router,
              private sharedDataService: SharedDataService,
              private sessionStorage: SessionStorageService) { }

  ngOnChanges(changes: any) {
    console.log('Sameer =>change ', changes);
  }

  ngOnInit(): void {
    console.log('Sameer => selectDesignValue', this.selectDesignValue);
    this.profilePhoto = sessionStorage.getItem('profilePhoto');
    console.log('Sameer => his.profilePhoto 123 ', this.profilePhoto);
  }


  emitSelectedDesignValues(): void {
    // this.selectDesignValue = {
    //   colorValue: this.selectedColor,
    //   nameInputValue: this.enterName,
    //   jobInputValue: this.enterJobTitle,
    //   headerColorValue: this.selectHeaderColor,
    //   profilePhotoURL: this.selectedPhotoURL
    // };
    // this.sharedDataService.newLocationAdded.emit(this.selectDesignValue);
  }

  storeDesignValuesInSession(): void {
    try {
      this.selectDesignValue = {
        colorValue: this.selectedColor,
        nameInputValue: this.enterName,
        jobInputValue: this.enterJobTitle,
        headerColorValue: this.selectHeaderColor,
        profilePhotoURL: this.selectedPhotoURL,
        introText: ''
      };
      const selectDesignValueAsString = JSON.stringify(this.selectDesignValue);
      sessionStorage.setItem('designValues', selectDesignValueAsString);
      console.log('Design values stored in session:', this.selectDesignValue);
    } catch (error) {
      console.error('Error storing design values in session:', error);
    }
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (value?.trim()) {
      this.addLinks.push({ name: value.trim() });
    }

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
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  selectGradient(gradient: string): void {
    console.log('Selected Gradient:', gradient);
    this.selectedColor = gradient;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  selectColorPicker(){
    const colorPicker = (document.getElementById('colorPicker') as HTMLInputElement).value;
    console.log('Sameer => colorPicker 11111', colorPicker);
    this.selectedColor = colorPicker;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  updateHeaderColor(colorPicker: any){
    console.log('Sameer => colorPicker12222', colorPicker);
    this.selectHeaderColor = colorPicker;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  updateGradient() {
    const color1 = (document.getElementById('color1') as HTMLInputElement).value;
    const color2 = (document.getElementById('color2') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value || 0;

    this.gradient = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
    this.selectedColor = this.gradient;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  updateHeaderGradient(): void {
    this.selectHeaderColor = `linear-gradient(${this.gradientDegree}deg, ${this.gradientColor1}, ${this.gradientColor2})`;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  onSelectCard(card : any){
    console.log('Sameer => card', card);
    this.selectedColor = `url(${card.imageSrc}) no-repeat center / cover`
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.profilePhoto = e.target?.result as string;
        console.log('Selected Photo:', this.profilePhoto);
        sessionStorage.setItem('profilePhoto', this.profilePhoto);    // Store the profile photo in session storage
      };

      reader.readAsDataURL(file);
      // this.emitSelectedDesignValues();
      this.storeDesignValuesInSession();
    }
  }

  enterNameData(){
    console.log('Name changed:', this.name);
    this.enterName = this.name;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
  }

  insertCustomElement(){
  }

  enterJobData(){
    console.log('Sameer => this.jobTitle', this.jobTitle);
    this.enterJobTitle = this.jobTitle;
    // this.emitSelectedDesignValues();
    this.storeDesignValuesInSession();
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

interface Link {
  name: string;
}
