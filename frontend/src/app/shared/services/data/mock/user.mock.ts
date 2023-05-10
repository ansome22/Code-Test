import { User, UserType } from 'src/app/shared/models/user';

export const UserMock: User[] = [
  {
    user_id: 1,
    first_name: 'Mike',
    last_name: 'Richard',
    email: 'mRich@gmail.com',
    username: 'mrich',
    password: 'Password.1',
    sub: 'qwecty',
    user_type: UserType.Customer,
  },
  {
    user_id: 2,
    first_name: 'Alex',
    last_name: 'Thomas',
    email: 'alethoa6@gmail.com',
    username: 'alethoa6',
    password: 'Password.1',
    sub: 'twbcky',
    user_type: UserType.Admin,
  },
  {
    user_id: 3,
    first_name: 'Daniel',
    last_name: 'Green',
    email: 'dgreen@gmail.com',
    username: 'dgreen',
    password: 'Password.1',
    sub: 'dgwectn',
    user_type: UserType.Customer,
  },
  {
    user_id: 4,
    first_name: 'Bill',
    last_name: 'Pepper',
    email: 'bpeeper@gmail.com',
    username: 'bpeeper',
    password: 'Password.1',
    sub: 'qwmbctu',
    user_type: UserType.Customer,
  },
];
