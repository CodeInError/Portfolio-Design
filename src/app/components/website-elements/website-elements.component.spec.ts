import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteElementsComponent } from './website-elements.component';

describe('WebsiteElementsComponent', () => {
  let component: WebsiteElementsComponent;
  let fixture: ComponentFixture<WebsiteElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
