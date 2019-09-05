import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../list-tasks/list-tasks.component';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id:number
  task:Task
  
  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.task = new Task;
    this.todoService.retrieveTask(this.id).subscribe(
      data=> this.task = data
    );
  }

  saveTask(){
    this.todoService.updateTask(this.id, this.task).subscribe(
      data=> console.log(data)
    );
    this.router.navigate(['']);
  }
}
