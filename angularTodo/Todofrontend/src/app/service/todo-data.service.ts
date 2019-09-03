import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../list-tasks/list-tasks.component';

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
}
