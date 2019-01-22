import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc11prodPassingObjToChildComponent } from './dc11prod-passing-obj-to-child.component';

describe('Dc11prodPassingObjToChildComponent', () => {
  let component: Dc11prodPassingObjToChildComponent;
  let fixture: ComponentFixture<Dc11prodPassingObjToChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dc11prodPassingObjToChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc11prodPassingObjToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
