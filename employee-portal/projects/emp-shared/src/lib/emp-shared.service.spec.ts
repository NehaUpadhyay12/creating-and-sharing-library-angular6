import { TestBed } from '@angular/core/testing';

import { EmpSharedService } from './emp-shared.service';

describe('EmpSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpSharedService = TestBed.get(EmpSharedService);
    expect(service).toBeTruthy();
  });
});
