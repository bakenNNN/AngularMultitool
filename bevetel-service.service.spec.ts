import { TestBed } from '@angular/core/testing';

import { BevetelServiceService } from './bevetel-service.service';

describe('BevetelServiceService', () => {
  let service: BevetelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BevetelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
