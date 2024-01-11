import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdietComponent } from './listdiet.component';

describe('ListdietComponent', () => {
  let component: ListdietComponent;
  let fixture: ComponentFixture<ListdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
