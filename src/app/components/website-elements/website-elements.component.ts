import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

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

  constructor() { }

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
}

// Define the Fruit type using TypeScript interface
interface Link {
  name: string;
}
