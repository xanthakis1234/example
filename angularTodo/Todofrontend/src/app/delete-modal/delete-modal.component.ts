import { Component, OnInit } from '@angular/core';
import { ListTasksComponent } from '../home/home-component/Components/list-tasks/list-tasks.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoDataService } from '../service/todo-data.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
//test
  idToBeDeleted:number
  constructor(
    private modalService: NgbModal,
    private todoService:TodoDataService,
    private list: ListTasksComponent
    ) { 
  }

  ngOnInit() {
  }
  
  open(content) {
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-primary-title'});
    this.idToBeDeleted = this.todoService.getIdToBeDeleted();
  }

  onCloseModal(){
      this.todoService.deleteTask(this.idToBeDeleted).subscribe(
        response =>{
          this.list.fetchTasks();
        }
      );
    }
  }
