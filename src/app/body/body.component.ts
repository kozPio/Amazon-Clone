import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  products: Product[];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(): void {
    this.ProductService.getProducts().subscribe(products => this.products = products);
  }
}
