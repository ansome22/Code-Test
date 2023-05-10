import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/data/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ShowProductsComponent {
  product?: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
}
