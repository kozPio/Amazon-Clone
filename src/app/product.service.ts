import { Injectable } from '@angular/core';
import { Product } from './products';
import { PRODUCTS } from './product-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS)
  }
}
