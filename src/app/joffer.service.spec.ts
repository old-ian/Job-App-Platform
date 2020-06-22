import { TestBed } from '@angular/core/testing';

import { JofferService } from './joffer.service';

describe('JofferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JofferService = TestBed.get(JofferService);
    expect(service).toBeTruthy();
  });
});
