import { Injectable } from '@angular/core';
import { CartsMock } from './mock/cart.mock';
import { of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private carts = CartsMock;
  constructor(private productsService: ProductService) {}

  getAllCarts() {
    return of(this.carts);
  }

  getCartByUser(user_id: any) {
    const cart = this.carts.find((cart) => {
      if (cart.user_id == user_id) {
        return true;
      } else {
        return false;
      }
    });

    return of(cart);
  }
}
