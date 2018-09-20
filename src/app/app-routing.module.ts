import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { IconsComponent } from './icons/icons.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: []
})
export class AppRoutingModule {}
