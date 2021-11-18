import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productsInBasket$: Observable<string>;
  numberOfProducts: string;

  constructor(private store: Store<{ message: string }>) {
    this.productsInBasket$ = store.select('message');
  }

  ngOnInit(): void {}

  countItemsInBasket() {
    this.productsInBasket$.subscribe(
      (items) => (this.numberOfProducts = items)
    );
  }
}
