import { Injectable } from '@angular/core';
import { UserMock } from './mock/user.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = UserMock;

  constructor() {}

  checkLogin(username: string, password: string) {
    const user = this.users.find((user) => {
      if (user.username == username && user.password == password) {
        return true;
      } else {
        return false;
      }
    });

    return of(user);
  }

  getUserFromSub(usersub: string) {
    const user = this.users.find((user) => {
      if (user.sub == usersub) {
        return true;
      } else {
        return false;
      }
    });

    return of(user);
  }
}
