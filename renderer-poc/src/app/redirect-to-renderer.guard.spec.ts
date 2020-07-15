import { TestBed } from '@angular/core/testing';

import { RedirectToRendererGuard } from './redirect-to-renderer.guard';

describe('RedirectToRendererGuard', () => {
  let guard: RedirectToRendererGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectToRendererGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
