import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { UserType } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/data/product.service';

@Component({
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  isAdmin: boolean = false;
  isCustomer: boolean = false;
  products?: Product[];
  constructor(
    private productService: ProductService,
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
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
