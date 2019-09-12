import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../home/Components/list-tasks/list-tasks.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  i:number
  constructor(
    private http:HttpClient
  ) { }
  
  readonly APP_URL = 'http://localhost:8080';
  
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
    console.log(id)
    return this.http.get<Task>(`http://localhost:8080/todo/${id}`);
  }

  updateTask(id, task){
    return this.http.put(`http://localhost:8080/todo/updateTask/${id}`, task);
  }

}
