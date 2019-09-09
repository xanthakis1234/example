import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Task } from '../list-tasks/list-tasks.component';
import { TodoDataService } from '../service/todo-data.service';
import { Output, EventEmitter } from '@angular/core';
import {ListTasksComponent} from '../list-tasks/list-tasks.component'


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
 tasks:Task[];
  task:Task = new Task();
  submitted = false;

  constructor(private todoDataService:TodoDataService,
    @Inject(forwardRef(() => ListTasksComponent)) private listTasksComponent: ListTasksComponent) { }

  ngOnInit() {
  }
 
  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.todoDataService.createTask(this.task).subscribe(
      response=>{ 
        this.listTasksComponent.fetchTasks();
      },      
       error => console.log(error));        
  }
 

  onSubmit() {
    this.submitted = true;
    this.save();
   
  }

  @Output() someEvent = new EventEmitter<string>();

  callParent() {
    this.someEvent.next('somePhone');
  }

}



