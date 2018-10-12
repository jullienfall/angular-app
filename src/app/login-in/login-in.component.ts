import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from './state';
import * as userActions from './state/user.action';
import * as fromRoot from './app.state';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  errorMessage: string;
  componentActive = true;
  maskPassword: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.store
      .pipe(
        select(fromUser.getMaskPassword),
        takeWhile(() => this.componentActive)
      )
      .subscribe(maskPassword => (this.maskPassword = maskPassword));
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new userActions.MaskPassword(value));
  }

  login(loginForm: FormGroup): void {
    const userName = loginForm.get('userName').value;
    const password = loginForm.get('password').value;
    this.authService.login(userName, password);
    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    } else {
      this.router.navigate(['/blog']);
    }
  }
}
