import { Injectable } from '@angular/core';
import { ProducksMock } from './mock/product.mock';
import { of } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = ProducksMock;

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

  editProduct(productRequest: Product) {
    const productDatabase = this.products.find((product) => {
      if (product.id == productRequest.id) {
        return true;
      } else {
        return false;
      }
    });
    debugger;
    //make sure it exists in our memory
    if (productDatabase) {
      productDatabase.sku = productRequest.sku;
      productDatabase.name = productRequest.name;
      productDatabase.description = productRequest.description;
      productDatabase.price = productRequest.price;

      const foundIndex = this.products.findIndex(
        (x) => x.id == productRequest.id
      );

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
