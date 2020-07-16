import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkTriangleComponent } from './pink-triangle.component';

describe('PinkTirangleComponent', () => {
  let component: PinkTriangleComponent;
  let fixture: ComponentFixture<PinkTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
