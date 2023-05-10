import { Injectable } from '@angular/core';
import { CartProductsMock, CartsMock } from './mock/cart.mock';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import { CartProductsFront } from '../../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts = CartsMock;
  cartProducts = CartProductsMock;
  constructor(private productsService: ProductService) {}

  getAllCarts() {
    return of(
      // prefarably the backend would be able to make this one query in a database
      // such this is a fake database a little harder
      this.carts.map((cart) => {
        const cartproducts = this.cartProducts.filter((cartProduct) => {
          return cartProduct.user_id == cart.user_id;
        });

        const filteredProjects = this.productsService.products.filter(
          (product) => {
            return cartproducts.some((value) => {
              return value.productID == product.id;
            });
          }
        );
        const finalCart: CartProductsFront = {
          user_id: cart.user_id,
          first_name: cart.first_name,
          last_name: cart.last_name,
          email: cart.email,
          products: filteredProjects,
        };
        return finalCart;
      })
    );
  }

  getCartByUser(user_id: any) {
    const cart = this.carts.find((cart) => {
      if (cart.user_id == user_id) {
        return true;
      } else {
        return false;
      }
    });

    if (cart) {
      // prefarably the backend would be able to make this one query in a database
      // such this is a fake database a little harder
      const cartproducts = this.cartProducts.filter((cartProduct) => {
        return cartProduct.user_id == user_id;
      });
      const filteredProjects = this.productsService.products.filter(
        (product) => {
          return cartproducts.some((value) => {
            return value.productID == product.id;
          });
        }
      );
      //create object putting all data together
      const finalCart: CartProductsFront = {
        user_id: cart.user_id,
        first_name: cart.first_name,
        last_name: cart.last_name,
        email: cart.email,
        products: filteredProjects,
      };
      //return object
      return of(finalCart);
    } else {
      //if null it could not be found
      return of();
    }
  }
}
