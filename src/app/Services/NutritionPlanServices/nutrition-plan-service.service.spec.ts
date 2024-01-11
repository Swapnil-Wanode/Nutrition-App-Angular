import { TestBed } from '@angular/core/testing';

import { NutritionPlanServiceService } from './nutrition-plan-service.service';

describe('NutritionPlanServiceService', () => {
  let service: NutritionPlanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionPlanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
