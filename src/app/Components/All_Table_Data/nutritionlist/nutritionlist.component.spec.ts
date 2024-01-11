import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionlistComponent } from './nutritionlist.component';

describe('NutritionlistComponent', () => {
  let component: NutritionlistComponent;
  let fixture: ComponentFixture<NutritionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
