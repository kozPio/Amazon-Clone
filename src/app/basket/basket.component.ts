import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from './../products';
import { ProductService } from './../product.service';
import { emptyBasket } from '../reducers/basketActions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  message$: Observable<string>;
  @Input() product: Product;

  products: Product[];

  constructor(
    private store: Store<{ message: string }>,
    private ProductService: ProductService
  ) {
    this.message$ = store.select('message');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.ProductService.getProducts().subscribe(
      (products) => (this.products = products)
    );
  }

  ChangeToInt(value) {
    return parseInt(value);
  }

  basketEmpty() {
    this.store.dispatch(emptyBasket({ id }));
  }
}
