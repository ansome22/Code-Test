import { Injectable } from '@angular/core';
import { ProducksMock } from './mock/product.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = ProducksMock;

  constructor() {}

  getProducts() {
    return of(this.products);
  }

  findProduct(sku: string) {
    const product = this.products.find((product) => {
      if (product.sku == sku) {
        return true;
      } else {
        return false;
      }
    });

    return of(product);
  }
}
