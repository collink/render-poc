import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCircleItemComponent } from './green-circle-item.component';

describe('GreenCircleItemComponent', () => {
  let component: GreenCircleItemComponent;
  let fixture: ComponentFixture<GreenCircleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenCircleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCircleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
