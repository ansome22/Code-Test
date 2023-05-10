import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { Cart_Product, Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  templateUrl: './list-all-carts.component.html',
  styleUrls: ['./list-all-carts.component.css'],
})
export class ListAllCartsComponent {
  carts?: Cart[];
  constructor(private cartService: CartService, private router: Router) {
    this.getCarts();
  }

  getCarts() {
    this.cartService.getAllCarts().subscribe((carts) => {
      this.carts = carts;
    });
  }

  showCart(user_id: number) {
    this.router.navigate(['in', 'cart', 'show', user_id]);
  }

  amountofProducts(products?: number[]) {
    if (products && products.length > 0) {
      return products.length;
    } else {
      return 0;
    }
  }
}
