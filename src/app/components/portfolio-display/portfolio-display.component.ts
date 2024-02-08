import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  selectDesignValue: any;

  constructor(private sharedDataService: SharedDataService, private cdr: ChangeDetectorRef) { }
  ngOnChanges(changes: any) {
    console.log('Sameer =>name changes', changes);
  }

  ngOnInit(): void {
    // this.subscription = this.sharedDataService.newLocationAdded.subscribe((name) => {
    //   console.log('Sameer => newLocationAdded 123', name);
    //   this.nameDate = name;
    //   this.nameInputValue = name.nameInputValue;
    //   this.jobInputValue = name.jobInputValue;
    // });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

ngDoCheck(): void {
  const storedDesignValuesAsString = sessionStorage.getItem('designValues');
  console.log('Sameer => storedDesignValuesAsString', storedDesignValuesAsString);
  if (storedDesignValuesAsString) {
    this.selectDesignValue = JSON.parse(storedDesignValuesAsString);
    console.log('Sameer => this.selectDesignValue', this.selectDesignValue);
    this.nameDate = this.selectDesignValue;
    this.nameInputValue = this.selectDesignValue.nameInputValue;
    this.jobInputValue = this.selectDesignValue.jobInputValue
  }
  this.profilePhoto = sessionStorage.getItem('profilePhoto');

  this.cdr.detectChanges();
}

}
