import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KozfogisPdfComponent } from './kozfogis-pdf.component';

describe('KozfogisPdfComponent', () => {
  let component: KozfogisPdfComponent;
  let fixture: ComponentFixture<KozfogisPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KozfogisPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KozfogisPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
