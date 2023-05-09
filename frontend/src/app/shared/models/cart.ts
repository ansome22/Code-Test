import { Product } from "./product";

export interface Cart {
    first_name: string, 
    last_name: string, 
    email: string
    products: Partial<Product>[],
}