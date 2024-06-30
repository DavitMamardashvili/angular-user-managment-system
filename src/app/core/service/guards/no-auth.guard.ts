import { CanActivateFn , Router } from '@angular/router';
import { inject } from '@angular/core';


export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let activate:boolean = localStorage['token'] == undefined || localStorage['token'].length == 0;
  if(activate){
    router.navigate(['/auth']);
  }
  return !activate;};
