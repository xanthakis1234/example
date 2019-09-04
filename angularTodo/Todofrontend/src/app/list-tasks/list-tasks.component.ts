import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Task{
  public id: number;
  public description: string;
  public isDone: boolean;
  public date: Date; 
}

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit{
  
  tasks:Task[]
  
  constructor( 
    private todoService:TodoDataService,
    private http:HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks(){
    this.todoService.printTasks().subscribe(
      response => {
        this.tasks = response;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  createTaskPage(){
    this.router.navigate(['/add']);

  }

  deleteTask(id){
    this.todoService.deleteTask(id).subscribe(
      response =>{
        this.fetchTasks();
      }
    );
  }
}
