import { TestBed } from '@angular/core/testing';

import { ItemRendererService } from './item-renderer.service';

describe('ItemRendererService', () => {
  let service: ItemRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
