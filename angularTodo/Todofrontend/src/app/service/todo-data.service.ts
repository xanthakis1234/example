import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../list-tasks/list-tasks.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  
  // Url to fetch the employee records from the spring application.
  readonly APP_URL = 'http://localhost:8080';
  // Method to fetch all employees from the database table.
  printTasks() {
    return this.http.get<Task[]>(this.APP_URL + '/todo/getTasks');
  }

 
   createTask(task: Object): Observable<Object> {
    return this.http.post(this.APP_URL + '/todo/createTask', task);
  }

  deleteTask(id){
    return this.http.delete(`http://localhost:8080/todo/deleteTask/${id}`);
  }

  retrieveTask(id){
    return this.http.get<Task>(`http://localhost:8080/todo/${id}`);
  }

  updateTask(id, task){
    return this.http.put(`http://localhost:8080/todo/${id}`, task);
  }

}
