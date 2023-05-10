import { Injectable } from '@angular/core';
import { ProducksMock } from './mock/product.mock';
import { of } from 'rxjs';
import { Product } from '../../models/product';

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

  editProduct(sku: string, product: Product) {
    const productDatabase = this.products.find((product) => {
      if (product.sku == sku) {
        return true;
      } else {
        return false;
      }
    });
    debugger;
    //make sure it exists in our memory
    if (productDatabase) {
      productDatabase.sku = product.sku;
      productDatabase.name = product.name;
      productDatabase.description = product.description;
      productDatabase.price = product.price;

      const foundIndex = this.products.findIndex((x) => x.sku == sku);

      if (foundIndex != -1) {
        this.products[foundIndex] = productDatabase;

        //successfully editted the product
        return of(true);
      } else {
        //failed to edit product
        return of(false);
      }
    } else {
      //failed to edit product
      return of(false);
    }
  }

  DoesSKUExist(sku: string) {
    const exists = this.products.some((product) => {
      if (product.sku == sku) {
        return true;
      } else {
        return false;
      }
    });

    return of(exists);
  }
}
