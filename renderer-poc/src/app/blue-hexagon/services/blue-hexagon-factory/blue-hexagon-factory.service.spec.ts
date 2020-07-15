import { TestBed } from '@angular/core/testing';

import { BlueHexagonFactory } from './blue-hexagon-factory.service';

describe('BlueHexagonFactoryService', () => {
  let service: BlueHexagonFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueHexagonFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
