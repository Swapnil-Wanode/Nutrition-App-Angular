import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietlistComponent } from './dietlist.component';

describe('DietlistComponent', () => {
  let component: DietlistComponent;
  let fixture: ComponentFixture<DietlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
