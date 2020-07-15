import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCircleComponent } from './green-circle.component';

describe('GreenCircleComponent', () => {
  let component: GreenCircleComponent;
  let fixture: ComponentFixture<GreenCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
