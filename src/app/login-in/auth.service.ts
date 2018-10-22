import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null;
  redirectUrl: string;

  constructor() {}

  isLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) {
      let localUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = {
        id: localUser.id,
        userName: localUser.userName,
        password: localUser.password
      };
    }
    return !!this.currentUser;
  }

  login(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      password: password
    };
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: this.currentUser.id,
        userName: this.currentUser.userName,
        password: this.currentUser.password
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
}
