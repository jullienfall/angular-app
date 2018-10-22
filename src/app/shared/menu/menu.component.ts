import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../login-in/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService) {}

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
