import { Injectable } from '@angular/core';
import {
  CartCheckedOutMock,
  CartProductsMock,
  CartsMock,
} from './mock/cart.mock';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import {
  Cart,
  CartCheckedOut,
  CartProducts,
  CartProductsFront,
} from '../../models/cart';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts = CartsMock;
  cartcheckedOuts = CartCheckedOutMock;
  cartProducts = CartProductsMock;
  constructor(
    private productsService: ProductService,
    private userService: UserService
  ) {}

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

  addProductToCart(usersub: any, productID: number) {
    //findUser
    // should be Code Flow but there is no backend

    const user = this.userService.users.find((user) => {
      if (user.sub == usersub) {
        return true;
      } else {
        return false;
      }
    });
    //check user did exist
    if (user) {
      const cart = this.carts.find((cart) => {
        if (cart.user_id == user.user_id) {
          return true;
        } else {
          return false;
        }
      });

      if (cart) {
        //check product already exists
        const idIfExists = this.cartProducts.findIndex((cartProduct) => {
          if (
            cartProduct.user_id == user.user_id &&
            cartProduct.productID == productID
          ) {
            return true;
          } else {
            return false;
          }
        });

        if (idIfExists != -1) {
          //add amount if exists
          this.cartProducts[idIfExists].amount++;
          return of(true);
        } else {
          //else add new product to cart
          const cartProduct: CartProducts = {
            user_id: user.user_id,
            productID: productID,
            amount: 1,
          };
          this.cartProducts.push(cartProduct);
          return of(true);
        }
      } else {
        throw 'Cart not found';
      }
    } else {
      throw 'User Not Found';
    }
  }

  checkOutCart(usersub: any, requestCart: Cart) {
    //findUser
    // should be Code Flow but there is no backend

    const user = this.userService.users.find((user) => {
      if (user.sub == usersub) {
        return true;
      } else {
        return false;
      }
    });

    //check user did exist
    if (user) {
      //find the cart
      const cart = this.carts.find((cart) => {
        if (cart.user_id == user.user_id) {
          return true;
        } else {
          return false;
        }
      });

      if (cart) {
        //save cart to checked out "Table"
        const cartCheckout: CartCheckedOut = {
          user_id: cart.user_id,
          first_name: requestCart.first_name,
          last_name: requestCart.last_name,
          email: requestCart.email,
          datechecked: new Date(),
        };
        this.cartcheckedOuts.push(cartCheckout);

        //remove cart
        this.carts = this.carts.filter((cart) => {
          if (cartCheckout.user_id != cart.user_id) {
            return true;
          } else {
            return false;
          }
        });

        return of(true);
      } else {
        throw 'Could not find cart';
      }
    } else {
      throw 'Could not find user';
    }
  }
}
