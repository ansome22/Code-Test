export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductCustomer extends Product {
  addedtoCart: boolean;
}
