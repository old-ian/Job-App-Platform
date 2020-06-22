import { TestBed } from '@angular/core/testing';

import { JobofferpaginationService } from './jobofferpagination.service';

describe('JobofferpaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobofferpaginationService = TestBed.get(JobofferpaginationService);
    expect(service).toBeTruthy();
  });
});
