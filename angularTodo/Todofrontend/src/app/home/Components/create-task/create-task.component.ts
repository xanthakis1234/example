import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Task } from '../list-tasks/list-tasks.component';
import { TodoDataService } from '../../../service/todo-data.service';
import { Output, EventEmitter } from '@angular/core';
import {ListTasksComponent} from '../list-tasks/list-tasks.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task:Task = new Task();
  submitted = false;
  registerForm: FormGroup;

  constructor(private todoDataService:TodoDataService,
    private formBuilder:FormBuilder,
    @Inject(forwardRef(() => ListTasksComponent)) private listTasksComponent: ListTasksComponent,
    ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      description: ['', Validators.required]     
  });

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
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
    this.registerForm.reset();
    this.submitted = false;
  }

  


  @Output() someEvent = new EventEmitter<string>();

  callParent() {
    this.someEvent.next('somePhone');
  }

}



