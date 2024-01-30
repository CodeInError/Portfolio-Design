import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-design',
  templateUrl: './custom-design.component.html',
  styleUrls: ['./custom-design.component.scss'],
})
export class CustomDesignComponent implements OnInit {
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
  selectedColor: string = 'fff';
  colors: string[] = ['fff','#FF5733', '#33FF57', '#5733FF'];

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


}

// Define the Fruit type using TypeScript interface
interface Link {
  name: string;
}
