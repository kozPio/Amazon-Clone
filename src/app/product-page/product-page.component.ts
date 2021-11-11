import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../products';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  @Input() product: Product;
  // @Output() currentId: EventEmitter<string> = new EventEmitter();
  products: Product[];
  id: string;
  idToNumber: number;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.id.replace(':', '');
    this.idToNumber = parseInt(this.id);

    this.getProduct();
  }

  getProduct(): void {
    this.ProductService.getProducts().subscribe(
      (products) => (this.products = products)
    );
  }

  ChangeToInt(value) {
    return Math.floor(value);
  }
  // setCurrentId() {
  //   this.currentId.emit(this.id)
  // }
}
