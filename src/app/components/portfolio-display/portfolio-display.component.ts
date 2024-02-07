import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-display',
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss']
})
export class PortfolioDisplayComponent implements OnInit {
  @Input() enteredName: string = '';
  @Input() selectedColor: string = '';
  // @Input() name: string = '';
  @Output() nameChanged = new EventEmitter<string>();
  name: string = '';
  nameDate: any;
  nameInputValue: any;
  jobInputValue: any;
  public subscription: Subscription | any;
  profilePhoto: any;

  constructor(private sharedDataService: SharedDataService) { }
  ngOnChanges(changes: any) {
    console.log('Sameer =>name changes', changes);
  }

  ngOnInit(): void {
    this.subscription = this.sharedDataService.newLocationAdded.subscribe((name) => {
      console.log('Sameer => newLocationAdded 123', name);
      this.nameDate = name;
      this.nameInputValue = name.nameInputValue;
      this.jobInputValue = name.jobInputValue;
    });
    this.profilePhoto = sessionStorage.getItem('profilePhoto');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}


}
