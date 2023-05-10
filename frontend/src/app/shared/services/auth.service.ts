import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User, UserType } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private localStorage: LocalStorageService) {}

  getUserType() {
    const user = this.localStorage.getItem('user') as User;
    return user.user_type;
  }

  getUserSub() {
    const user = this.localStorage.getItem('user') as User;
    return user.sub;
  }

  isLoggedIn() {
    const user = this.localStorage.getItem('user') as User;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
