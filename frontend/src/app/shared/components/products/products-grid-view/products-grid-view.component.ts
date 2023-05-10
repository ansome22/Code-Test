import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrls: ['./products-grid-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridViewComponent {
  @Input()
  products?: Product[];
  constructor(private router: Router) {}

  showProduct(sku: string) {
    this.router.navigate(['in', 'products', 'show', sku]);
  }

  addToCart(){
    
  }
}
