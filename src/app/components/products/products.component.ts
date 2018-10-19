import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscription;
  public customerForm: FormGroup;
  btn: boolean = false;
  products: Product[];
  product: Product;
  n: number = 0;
  result: boolean = false;
  form: boolean = false;
  feedback: Array<string> = [];

  constructor(private productService: ProductsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      answer: ['', Validators.required]
    });

    this.subscription = this.productService
      .getProducts()
      .subscribe(products => {
        this.products = products;
      })
      .add(() => (this.btn = true));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getProduct(n): void {
    this.product = this.products[n];
    this.form = true;
    this.btn = false;
  }

  submit(question, answer) {
    this.n = this.n + 1;
    this.feedback.push(question, answer);
    if (this.n < this.products.length) {
      this.getProduct(this.n);
    } else {
      this.result = true;
      this.form = false;
    }
  }
}
