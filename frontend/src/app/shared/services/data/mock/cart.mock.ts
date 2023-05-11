import { Cart, CartCheckedOut, CartProducts } from 'src/app/shared/models/cart';

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

export const CartCheckedOutMock: CartCheckedOut[] = [
  {
    first_name: 'Bill',
    user_id: 4,
    last_name: 'Pepper',
    email: 'aaa',
    datechecked: new Date('2023-05-11T13:24:00'),
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
