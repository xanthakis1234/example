import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private currentUserSubject:BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   //TODO:CONFIGURE BACKEND URL FOR LOGIN POST METHOD
   login(username: string, password: string){
     return this.http.post<any>('BACKEND URL HERE', { username, password })
      .pipe(map(user=>{
        if (user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;

      }));
   }

   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
