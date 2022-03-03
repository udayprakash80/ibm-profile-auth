import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('loginToken');
    return token === 'true';
  }
}
