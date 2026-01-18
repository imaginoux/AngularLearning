import { inject, Inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { UserLoginService } from '../Services/user-login.service';


export const loginGuard: CanActivateChildFn = (route, state) => {

 
 const userService=  inject(UserLoginService);
if(userService.user==null || userService.user==undefined){
 
    const router=  inject(Router);
 
    router.navigateByUrl("/login");
 
    return false;
  }

  return true;
};
