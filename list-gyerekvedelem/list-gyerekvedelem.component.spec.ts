import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGyerekvedelemComponent } from './list-gyerekvedelem.component';

describe('ListGyerekvedelemComponent', () => {
  let component: ListGyerekvedelemComponent;
  let fixture: ComponentFixture<ListGyerekvedelemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGyerekvedelemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGyerekvedelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
