import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar)
  if (typeof window !== 'undefined' && localStorage) {
    const localData = localStorage.getItem('userToken');

    if (localData) {
      return true;
    }
  }
  snackBar.open('You are not authenticated to access. Please complete login.', 'Close', {
    duration: 3000,
  });
  router.navigate(['/']);
  return false;
};
