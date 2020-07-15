import { TestBed } from '@angular/core/testing';

import { PinkTriangleService } from './pink-triangle-factory.service';

describe('PinkTriangleService', () => {
  let service: PinkTriangleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinkTriangleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
