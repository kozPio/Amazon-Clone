import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from './../products';
import { ProductService } from './../product.service';
import {
  removeOneItemFromBasket,
  addItemToBasket,
  removeItemFromBasket,
} from '../reducers/basketActions';

interface ProductAndNumber {
  amount: number;
  productId: string;
}

// interface ShowInnerInterface {
//   id: number;
//   display: boolean;
// }

interface ShowInterface {
  id: number;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  productsInBasket$: Observable<string[]>;
  arrayOfProducts: ProductAndNumber[] = [];
  @Input() product: Product;

  products: Product[];
  show: ShowInterface = { id: null };

  constructor(
    private store: Store<{ message: string[] }>,
    private ProductService: ProductService
  ) {
    this.productsInBasket$ = store.select('message');
  }

  ngOnInit(): void {
    this.getProduct();
    this.productsInBasket$.subscribe(
      (items) => (this.arrayOfProducts = this.countNumberOfItems(items))
    );
  }

  getProduct(): void {
    this.ProductService.getProducts().subscribe(
      (products) => (this.products = products)
    );
  }

  countNumberOfItems(products: string[]): ProductAndNumber[] {
    let tempArray: ProductAndNumber[] = [];
    for (let i = 0; i < products.length; i++) {
      let index = tempArray.findIndex(
        (product) => product.productId === products[i]
      );
      if (index === -1) {
        tempArray.push({ amount: 1, productId: products[i] });
      } else {
        tempArray[index] = {
          ...tempArray[index],
          amount: tempArray[index].amount + 1,
        };
      }
    }

    return tempArray;
  }

  ChangeToInt(value) {
    return parseInt(value);
  }

  removeItemFromBasket(id: string) {
    this.store.dispatch(removeItemFromBasket({ id }));
  }

  removeOneItemFromBasket(id: string) {
    this.store.dispatch(removeOneItemFromBasket({ id }));
  }

  addItemToBasket(id: string) {
    this.store.dispatch(addItemToBasket({ id }));
  }

  mouseEnter(id: number) {
    this.show.id = id;
  }

  mouseLeave() {
    this.show.id = null;
  }
}
