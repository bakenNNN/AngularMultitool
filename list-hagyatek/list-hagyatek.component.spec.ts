import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHagyatekComponent } from './list-hagyatek.component';

describe('ListHagyatekComponent', () => {
  let component: ListHagyatekComponent;
  let fixture: ComponentFixture<ListHagyatekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHagyatekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHagyatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
