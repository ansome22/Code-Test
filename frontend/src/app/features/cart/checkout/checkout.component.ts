import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, CartProductsFront } from 'src/app/shared/models/cart';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cart?: CartProductsFront;
  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
  });
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user$.subscribe((user) => {
      this.cart = undefined;
      if (user) {
        this.formGroup.patchValue({
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
        });
        this.getCart(user.user_id);
      }
    });
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

  checkOut() {
    if (this.formGroup.valid) {
      const cart = this.formToCart()
      this.cartService.checkOutCart(this.authService.UserSub,cart).subscribe({
        next: (result) => {
          //was successful
          if (result) {
            console.log('Checked out...');
            this.router.navigate(['in', 'dashboard']);
          } else {
            console.log('Issue checking out');
          }
        },
        error(err) {
          console.log(err);
        },
      });
    } else {
      console.log('Not valid');
    }
  }

  formToCart() {
    const cart: Cart = {
      user_id: this.authService.UserId,
      first_name: this.formGroup.controls['firstName'].value,
      last_name: this.formGroup.controls['lastName'].value,
      email: this.formGroup.controls['email'].value,
    };
    return cart
  }
}
