import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBevetelComponent } from './list-bevetel.component';

describe('ListBevetelComponent', () => {
  let component: ListBevetelComponent;
  let fixture: ComponentFixture<ListBevetelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBevetelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBevetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
