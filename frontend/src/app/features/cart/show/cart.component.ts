import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class ShowCartComponent {
  cart?: Cart;
  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCart(id);
    }
  }

  getCart(id:string) {
    this.cartService.getCartByUser(id).subscribe((cart) => {
      this.cart = cart;
    });
  }
}
