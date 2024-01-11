import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersectionComponent } from './customersection.component';

describe('CustomersectionComponent', () => {
  let component: CustomersectionComponent;
  let fixture: ComponentFixture<CustomersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
