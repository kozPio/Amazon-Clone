import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../products';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fullBasket, emptyBasket } from '../reducers/basketActions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  message$: Observable<string[]>;

  @Input() product: Product;

  constructor(private store: Store<{ message: string[] }>) {
    this.message$ = store.select('message');
  }

  ngOnInit(): void {}

  ChangeToInt(value) {
    return Math.floor(value);
  }

  basketEmpty(id: string) {
    this.store.dispatch(emptyBasket({ id }));
  }

  basketFull(id: string) {
    this.store.dispatch(fullBasket({ id }));
  }
}
