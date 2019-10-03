import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TodoDataService } from './todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private todoDataService: TodoDataService,
    private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.todoDataService.checkIfLoggedIn()){
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
