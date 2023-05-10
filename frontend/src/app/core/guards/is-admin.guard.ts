import { inject } from '@angular/core';
import { User, UserType } from 'src/app/shared/models/user';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

export const isAdminGuard = () => {
  const localStorage = inject(LocalStorageService);

    const user = localStorage.getItem('user') as User;
    if (user) {
      if (user.user_type == UserType.Admin) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
};
