import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserType } from 'src/app/shared/models/user';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable()
export class loggedInGuard {
  constructor(private localStorage: LocalStorageService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.localStorage.getItem('user') as User;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
