import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHexagonComponent } from './blue-hexagon.component';

describe('BlueHexagonComponent', () => {
  let component: BlueHexagonComponent;
  let fixture: ComponentFixture<BlueHexagonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueHexagonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
