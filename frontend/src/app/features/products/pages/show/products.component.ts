import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { UserType } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/data/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ShowProductsComponent {
  isAdmin: boolean = false;
  isCustomer: boolean = false;
  product?: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.isAdmin = this.isCustomer = false;
    const userType = this.authService.UserType;

    if (userType == UserType.Admin) {
      this.isAdmin = true;
    }

    if (userType == UserType.Customer) {
      this.isCustomer = true;
    }
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: string) {
    this.productService.findProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  editProduct(sku: string) {
    this.router.navigate(['in', 'products', 'edit', sku]);
  }

  goBack() {
    this.router.navigate(['in', 'products', 'list']);
  }
}
