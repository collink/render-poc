import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkTriangleItemComponent } from './pink-triangle-item.component';

describe('PinkTriangleItemComponent', () => {
  let component: PinkTriangleItemComponent;
  let fixture: ComponentFixture<PinkTriangleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkTriangleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkTriangleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
