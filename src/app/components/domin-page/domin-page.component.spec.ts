import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominPageComponent } from './domin-page.component';

describe('DominPageComponent', () => {
  let component: DominPageComponent;
  let fixture: ComponentFixture<DominPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
