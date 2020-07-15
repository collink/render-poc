import { TestBed } from '@angular/core/testing';

import { GreenCircleFactoryService } from './green-circle-factory.service';

describe('GreenCircleFactoryService', () => {
  let service: GreenCircleFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenCircleFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
