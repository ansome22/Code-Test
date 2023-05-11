import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User, UserType } from '../models/user';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.userSubject$.asObservable();

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    const user = this.localStorage.getItem('user') as User;
    this.userSubject$.next(user);
  }

  get UserType() {
    const user = this.localStorage.getItem('user') as User;
    return user.user_type;
  }

  get UserSub() {
    const user = this.localStorage.getItem('user') as User;
    return user.sub;
  }

  get Fname() {
    const user = this.localStorage.getItem('user') as User;
    return user.first_name;
  }

  get UserId() {
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

  login(user: User) {
    this.localStorage.setItem('user', user);
    this.userSubject$.next(user);
  }

  logout() {
    this.localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
