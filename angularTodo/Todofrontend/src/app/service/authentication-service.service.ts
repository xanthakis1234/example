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
  private responseBody = null;

  constructor(private http: HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.responseBody));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   readonly APP_URL = 'http://localhost:8080/todo';

    public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }

   login(username: string, password: string){
        return this.http.post<any>(this.APP_URL + '/authenticate', { username, password }, 
        { observe: 'response' })
      .pipe(map(response=>{
        this.responseBody = response.body;
        if (response.headers.get('Token')){
           localStorage.setItem('currentUser', response.headers.get('Token'));
          this.currentUserSubject.next(response.body);
          console.log("login done");
          console.log(this.currentUserSubject.value)
        }
        console.log("login not done");
        return response;
      }));
     
   }

   isUserLoggedIn(){
    let token = localStorage.getItem('currentUser');
    if (token == null){
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
