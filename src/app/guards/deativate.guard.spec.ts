import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deativateGuard } from './deativate.guard';

describe('deativateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deativateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
