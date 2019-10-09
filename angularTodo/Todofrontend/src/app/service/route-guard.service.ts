import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TodoDataService } from './todo-data.service';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private todoDataService: TodoDataService,
    private authenticationService: AuthenticationService,
    private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser){
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }

  }  
   // MOCK GUARD
  //   if(this.todoDataService.checkIfLoggedIn()){
  //     return true;
  //   } else {
  //     this.router.navigate(['']);
  //     return false;
  //   }
  // }

}
