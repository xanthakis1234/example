import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  isloggedIn: boolean;
  constructor(
    private http: HttpClient
  ) { 
    this.isloggedIn = false;
  }
  
  readonly APP_URL = 'http://localhost:8080/todo';
  
  printTasks() {
    return this.http.get<Task[]>(this.APP_URL + '/getTasks');
  }

 
   createTask(task: Object): Observable<Object> {
    return this.http.post(this.APP_URL + '/createTask', task);
  }

  deleteTask(id){
    return this.http.delete(this.APP_URL + `/deleteTask/${id}`);
  }

  retrieveTask(id){
    console.log(id)
    return this.http.get<Task>(this.APP_URL + `/${id}`);
  }

  updateTask(id, task){
    return this.http.put(this.APP_URL + `/updateTask/${id}`, task);
  }

  checkIfLoggedIn(){
      return this.isloggedIn;
  }
  onLogIn() {
    this.isloggedIn = true;
  }
}
