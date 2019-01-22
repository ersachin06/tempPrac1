import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dc9prodComponent } from './dc9prod.component';

describe('Dc9prodComponent', () => {
  let component: Dc9prodComponent;
  let fixture: ComponentFixture<Dc9prodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dc9prodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dc9prodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
