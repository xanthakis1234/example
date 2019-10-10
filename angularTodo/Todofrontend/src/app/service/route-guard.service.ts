import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser){
      console.log("route guard user authenticated");
      return true;
    } else {
      this.router.navigate(['']);
      console.log("route guard user not authenticated");
      return false;
    }

  }  
}
