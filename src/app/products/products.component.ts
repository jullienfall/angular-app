import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => (this.products = products));
  }
}
