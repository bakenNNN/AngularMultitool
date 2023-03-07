import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevetelgrafComponent } from './bevetelgraf.component';

describe('BevetelgrafComponent', () => {
  let component: BevetelgrafComponent;
  let fixture: ComponentFixture<BevetelgrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevetelgrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevetelgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
