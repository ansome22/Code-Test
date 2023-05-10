import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProductsFront } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class ShowCartComponent {
  cart?: CartProductsFront;
  constructor(private cartService: CartService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCart(id);
    }
  }

  getCart(id: string) {
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
