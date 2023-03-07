import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKozfogisComponent } from './create-kozfogis.component';

describe('CreateKozfogisComponent', () => {
  let component: CreateKozfogisComponent;
  let fixture: ComponentFixture<CreateKozfogisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKozfogisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKozfogisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
