import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './login-in/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  ngOnInit() {}

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/blog']);
  }
}
