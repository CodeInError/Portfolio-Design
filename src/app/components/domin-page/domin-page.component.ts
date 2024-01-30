import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domin-page',
  templateUrl: './domin-page.component.html',
  styleUrls: ['./domin-page.component.scss']
})
export class DominPageComponent implements OnInit {
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


}

// Define the Fruit type using TypeScript interface
interface Link {
  name: string;
}
