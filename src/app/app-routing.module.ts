import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ChartComponent } from './chart/chart.component';
import { ProductsComponent } from './products/products.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: []
})
export class AppRoutingModule {}
