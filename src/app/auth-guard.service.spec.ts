import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

describe('AuthGuardService', () => {
  let service: AuthService;
  let guard: AuthGuardService;
  let routeMock: any = { snapshot: {}};
  let stateMock: any = { snapshot: {}, url: '/cookies'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AuthGuardService, { provide: Router, useValue: routerMock }]
    });
    service = TestBed.inject(AuthService);
    guard = TestBed.inject(AuthGuardService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('unauthenticated user to registration page', () => {
    expect(guard.canActivate(routeMock, stateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['']);
    expect(routerMock.navigate).toHaveBeenCalledTimes(1);
  });

  it('authenticated user to profile page', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(guard.canActivate(routeMock, stateMock)).toEqual(true);
  });
});
