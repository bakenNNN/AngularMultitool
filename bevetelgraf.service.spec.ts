import { TestBed } from '@angular/core/testing';

import { BevetelgrafService } from './bevetelgraf.service';

describe('BevetelgrafService', () => {
  let service: BevetelgrafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BevetelgrafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
