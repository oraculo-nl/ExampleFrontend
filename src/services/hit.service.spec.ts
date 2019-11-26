import { TestBed } from '@angular/core/testing';

import { HitService } from './hit.service';

describe('HitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HitService = TestBed.get(HitService);
    expect(service).toBeTruthy();
  });
});
