import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  message$: Observable<string>;

  constructor(private store: Store<{ message: string }>) {
    this.message$ = store.select('message');
  }

  ngOnInit(): void {}
}
