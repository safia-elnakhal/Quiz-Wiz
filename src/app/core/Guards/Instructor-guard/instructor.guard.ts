import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const instructorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(localStorage.getItem('userToken') !== null && localStorage.getItem('userRole') == 'Instructor'){
    return true;

  }else{
    router.navigate(['/auth/login']);
    return false;
  }
};
