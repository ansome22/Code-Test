import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User, UserType } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  getUserType() {
    const user = this.localStorage.getItem('user') as User;
    return user.user_type;
  }

  getUserSub() {
    const user = this.localStorage.getItem('user') as User;
    return user.sub;
  }

  getFname() {
    const user = this.localStorage.getItem('user') as User;
    return user.first_name;
  }

  getUserId() {
    const user = this.localStorage.getItem('user') as User;
    return user.user_id;
  }

  isLoggedIn() {
    const user = this.localStorage.getItem('user') as User;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
