import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKozfogisComponent } from './list-kozfogis.component';

describe('ListKozfogisComponent', () => {
  let component: ListKozfogisComponent;
  let fixture: ComponentFixture<ListKozfogisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKozfogisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKozfogisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
