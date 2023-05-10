import { Injectable } from '@angular/core';
import { CartsMock } from './mock/cart.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private carts = CartsMock;
  constructor() {}

  getAllCarts(sub: string) {
    return of(this.carts);
  }
}
