import { Cart, CartProducts } from 'src/app/shared/models/cart';

export const CartsMock: Cart[] = [
  {
    first_name: 'Mike',
    user_id: 1,
    last_name: 'Door',
    email: 'aaa',
  },
  {
    first_name: 'Hanna',
    user_id: 3,
    last_name: 'Door',
    email: 'aaa',
  },
];

export const CartProductsMock: CartProducts[] = [
  {
    user_id: 1,
    productID: 1,
    amount: 1,
  },
  {
    user_id: 1,
    productID: 2,
    amount: 1,
  },
];
