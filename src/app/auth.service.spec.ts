import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('redirectToUrl by default', () => {
    expect(service.redirectToUrl).toEqual('');
  });

  it('isAuthenticated method by default', () => {
    expect(service.isAuthenticated).toBeTruthy();
  });

});
