import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C8custompipesComponent } from './c8custompipes.component';

describe('C8custompipesComponent', () => {
  let component: C8custompipesComponent;
  let fixture: ComponentFixture<C8custompipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C8custompipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C8custompipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
