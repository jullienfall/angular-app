import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// component
import { LoginInComponent } from './login-in.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginInComponent }]),
    StoreModule.forFeature('users', reducer)
  ],
  declarations: [LoginInComponent],
  providers: []
})
export class UserModule {}
