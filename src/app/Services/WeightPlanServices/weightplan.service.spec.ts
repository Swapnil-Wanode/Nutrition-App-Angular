import { TestBed } from '@angular/core/testing';

import { WeightplanService } from './weightplan.service';

describe('WeightplanService', () => {
  let service: WeightplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
