import { inject } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

export const loggedInGuard = () => {
  const localStorage = inject(LocalStorageService);

  const user = localStorage.getItem('user');
  if (user) {
    return true;
  } else {
    return false;
  }
};
