import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHexagonItemComponent } from './blue-hexagon-item.component';

describe('BlueHexagonItemComponent', () => {
  let component: BlueHexagonItemComponent;
  let fixture: ComponentFixture<BlueHexagonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueHexagonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueHexagonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
