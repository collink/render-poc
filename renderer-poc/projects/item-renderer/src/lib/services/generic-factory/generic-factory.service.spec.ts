import { TestBed } from '@angular/core/testing';

import { GenericFactoryService } from './generic-factory.service';

describe('GenericFactoryService', () => {
  let service: GenericFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
