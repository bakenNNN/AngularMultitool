import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKozfogisComponent } from './edit-kozfogis.component';

describe('EditKozfogisComponent', () => {
  let component: EditKozfogisComponent;
  let fixture: ComponentFixture<EditKozfogisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKozfogisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKozfogisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
