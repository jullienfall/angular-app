import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: []
})
export class AppRoutingModule {}
