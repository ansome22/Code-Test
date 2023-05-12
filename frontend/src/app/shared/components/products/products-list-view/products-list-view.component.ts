import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { UserType } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListViewComponent {
  isAdmin: boolean = false;
  isCustomer: boolean = false;
  @Input()
  products?: Product[];
  @Input()
  backButton: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.isAdmin = this.isCustomer = false;
    const userType = this.authService.UserType;

    if (userType == UserType.Admin) {
      this.isAdmin = true;
    }

    if (userType == UserType.Customer) {
      this.isCustomer = true;
    }
  }

  showProduct(sku: string) {
    this.router.navigate(['in', 'products', 'show', sku]);
  }

  goBack() {
    this.router.navigate(['in', 'dashboard']);
  }

  editProduct(sku: string) {
    this.router.navigate(['in', 'products', 'edit', sku]);
  }
}
