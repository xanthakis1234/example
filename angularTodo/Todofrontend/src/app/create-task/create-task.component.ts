import { Component, OnInit } from '@angular/core';
import { Task } from '../list-tasks/list-tasks.component';
import { TodoDataService } from '../service/todo-data.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task:Task = new Task();
  submitted = false;

  constructor(private todoDataService:TodoDataService) { }

  ngOnInit() {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.todoDataService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
