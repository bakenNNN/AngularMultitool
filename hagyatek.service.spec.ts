import { TestBed } from '@angular/core/testing';

import { HagyatekService } from './hagyatek.service';

describe('HagyatekService', () => {
  let service: HagyatekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HagyatekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
