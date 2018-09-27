import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProductsService],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
