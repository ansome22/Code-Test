import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductCustomer } from 'src/app/shared/models/product';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/data/cart.service';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrls: ['./products-grid-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridViewComponent {
  @Input()
  products?: Product[];
  constructor(
    private router: Router,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  showProduct(sku: string) {
    this.router.navigate(['in', 'products', 'show', sku]);
  }

  goBack() {
    this.router.navigate(['in', 'dashboard']);
  }

  addToCart(productID: number) {
    const userSub = this.authService.UserSub;
    this.cartService.addProductToCart(userSub, productID).subscribe({
      next: (added) => {
        if (added && this.products) {
          console.log('Added');
          //this.products[productID].addedtoCart = true;
        }
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
