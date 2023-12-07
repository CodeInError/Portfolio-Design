import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolioComponent } from './port-folio.component';

describe('PortFolioComponent', () => {
  let component: PortFolioComponent;
  let fixture: ComponentFixture<PortFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortFolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
