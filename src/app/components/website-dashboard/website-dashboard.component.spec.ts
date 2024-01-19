import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDashboardComponent } from './website-dashboard.component';

describe('WebsiteDashboardComponent', () => {
  let component: WebsiteDashboardComponent;
  let fixture: ComponentFixture<WebsiteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
