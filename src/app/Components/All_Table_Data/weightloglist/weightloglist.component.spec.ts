import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightloglistComponent } from './weightloglist.component';

describe('WeightloglistComponent', () => {
  let component: WeightloglistComponent;
  let fixture: ComponentFixture<WeightloglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightloglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
