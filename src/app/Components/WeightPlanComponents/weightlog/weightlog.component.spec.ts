import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightlogComponent } from './weightlog.component';

describe('WeightlogComponent', () => {
  let component: WeightlogComponent;
  let fixture: ComponentFixture<WeightlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
