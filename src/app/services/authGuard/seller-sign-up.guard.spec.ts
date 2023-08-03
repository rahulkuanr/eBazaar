import { TestBed } from '@angular/core/testing';

import { SellerSignUpGuard } from './seller-sign-up.guard';

describe('SellerSignUpGuard', () => {
  let guard: SellerSignUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerSignUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
