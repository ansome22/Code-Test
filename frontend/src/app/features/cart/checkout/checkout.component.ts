import { Component } from '@angular/core';
import { CartProductsFront } from 'src/app/shared/models/cart';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cart?: CartProductsFront;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    const id = this.authService.getUserId();
    if (id) {
      this.getCart(id);
    }
  }

  getCart(id: number) {
    this.cartService.getCartByUser(id).subscribe({
      next: (cart) => {
        this.cart = cart;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
