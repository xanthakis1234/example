import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(todoDataService: TodoDataService) { }

  ngOnInit() {
  }

}
