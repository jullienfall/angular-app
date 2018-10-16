import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// component
import { ProductsComponent } from './products.component';

// service
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'products', component: ProductsComponent }])
  ],
  providers: [ProductsService],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
