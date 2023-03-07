import { TestBed } from '@angular/core/testing';

import { KozfogisokService } from './kozfogisok.service';

describe('KozfogisokService', () => {
  let service: KozfogisokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KozfogisokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
