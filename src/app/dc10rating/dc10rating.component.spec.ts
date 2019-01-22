import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc10ratingComponent } from './dc10rating.component';

describe('Dc10ratingComponent', () => {
  let component: Dc10ratingComponent;
  let fixture: ComponentFixture<Dc10ratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dc10ratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc10ratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
