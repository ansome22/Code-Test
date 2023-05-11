import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListViewComponent {
  @Input()
  products?: Product[];
  constructor(private router: Router) {}

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
