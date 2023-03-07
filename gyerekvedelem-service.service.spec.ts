import { TestBed } from '@angular/core/testing';

import { GyerekvedelemServiceService } from './gyerekvedelem-service.service';

describe('GyerekvedelemServiceService', () => {
  let service: GyerekvedelemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GyerekvedelemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
