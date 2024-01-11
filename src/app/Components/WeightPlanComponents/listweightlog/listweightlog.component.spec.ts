import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListweightlogComponent } from './listweightlog.component';

describe('ListweightlogComponent', () => {
  let component: ListweightlogComponent;
  let fixture: ComponentFixture<ListweightlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListweightlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListweightlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
