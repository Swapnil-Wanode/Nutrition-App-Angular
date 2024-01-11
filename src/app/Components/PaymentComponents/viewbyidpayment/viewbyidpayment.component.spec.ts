import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyidpaymentComponent } from './viewbyidpayment.component';

describe('ViewbyidpaymentComponent', () => {
  let component: ViewbyidpaymentComponent;
  let fixture: ComponentFixture<ViewbyidpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbyidpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbyidpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
