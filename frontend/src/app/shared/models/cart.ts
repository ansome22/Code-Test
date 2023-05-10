import { Product } from './product';

export interface Cart {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface CartProducts {
  user_id: number;
  productID: number;
  amount: number;
}

export interface CartProductsFront extends Cart {
  products?: Product[];
}
