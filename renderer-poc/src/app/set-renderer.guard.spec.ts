import { TestBed } from '@angular/core/testing';

import { SetRendererGuard } from './set-renderer.guard';

describe('SetLatestRendererGuard', () => {
  let guard: SetRendererGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SetRendererGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
