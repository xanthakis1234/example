import { Component, OnInit, Input } from '@angular/core';
import { TodoDataService } from '../../../service/todo-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit{
  tasks: Task[]
  id: number
  task: Task
  idTaskToBeDeleted: number
  modalHeader: string = 'Delete Confirmation';
  modalBody: string ="Are you sure you want to delete this task?";

  constructor( 
    private todoService: TodoDataService,
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.fetchTasks();
  }

  public fetchTasks(){
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

  updateTaskInTable(id , event: Event){
    this.task = this.tasks.find(x => x.id == id);
    console.log(event);
    console.log((<HTMLParamElement>event.target).textContent)
    this.task.description = (<HTMLParamElement>event.target).textContent;
    console.log(this.task.description);
    console.log(`Update ${id} , ${this.task}`);
    this.todoService.updateTask(id, this.task).subscribe(
      data=> {
        console.log(data)
        this.fetchTasks();
      }
    );
  }

  receiveMessage($event , id){
    this.deleteTask(id);
  }
}
