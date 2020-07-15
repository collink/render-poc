import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkTirangleComponent } from './pink-tirangle.component';

describe('PinkTirangleComponent', () => {
  let component: PinkTirangleComponent;
  let fixture: ComponentFixture<PinkTirangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkTirangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkTirangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
