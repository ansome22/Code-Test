export interface Product {
  sku: string;
  name: string;
  description: string;
  price: number;
}

export interface Cart_Product extends Product {
  amount: number;
}
