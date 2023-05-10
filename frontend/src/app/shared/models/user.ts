export interface User {
  user_id: number;
  username: string;
  password: string;
  sub: string;
  user_type: UserType;
  first_name: string;
  last_name: string;
  email: string;
}

export enum UserType {
  Admin,
  Customer,
}
