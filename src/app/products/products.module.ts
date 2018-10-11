import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [ProductsService],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
