import { Cart_Product } from './product';

export interface Cart {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  products: number[];
}
