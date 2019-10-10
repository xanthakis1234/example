import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject:BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   readonly APP_URL = 'http://localhost:8080/todo';

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   login(username: string, password: string){
    console.log(this.isUserLoggedIn())
     return this.http.post<any>(this.APP_URL + '/login', { username, password })
      .pipe(map(user=>{
        //if (user && user.token){
        if (user){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log(this.isUserLoggedIn())
          console.log("login done");
         //console.log(this.currentUserSubject.value)
        }
        console.log("login not done");
        return user;
      }));
     
   }

   isUserLoggedIn(){
    let user = localStorage.getItem('currentUser');
    console.log("check local storage", localStorage.getItem('currentUser'))
    if (user == null){
      return false;
    } else {
      return true;
    }
  }

   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
