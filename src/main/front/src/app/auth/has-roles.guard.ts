import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Route, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRolesGuard implements CanActivate {

  isAuthorized : any
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const user = this.authService.user;

    if (user) {
      if (user.roles) {
        console.log(user.roles);
        console.log(route.data['roles']);
        this.isAuthorized = user.roles.includes(route.data['roles']);
        this.isAuthorized = user.roles.some((roles: string) => route.data['role'].includes(roles));

        // Rest of your code that uses isAuthorized
      } else {
        // Handle the case where user or user.roles is null or undefined
        //window.alert('you are not authorized');
        this.router.navigate(['/'])
      }
    } else {
      // Handle the case where user or user.roles is null or undefined
      //window.alert('you are not authorized');
      this.router.navigate(['/'])
    }


    if (!this.isAuthorized) {
      // redirect
      // display a message
      //window.alert('you are not authorized');
      this.router.navigate(['/'])
    }

    return this.isAuthorized || false;
  }
}
