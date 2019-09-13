import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListTasksComponent } from '../../../home/components/list-tasks/list-tasks.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoDataService } from '../../../service/todo-data.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() modalHeader: string
  @Input() modalBody: string
  @Output() messageEvent = new EventEmitter();
  @Output() CancelEvent = new EventEmitter<string>();

  constructor(
    private modalService: NgbModal,
    private todoService: TodoDataService,
    private list: ListTasksComponent,
    private modal: NgbActiveModal
    ) { 
  }

  ngOnInit() {
  }
  
  open(content) {
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-primary-title'});
  }

  onCloseModal(){
    this.messageEvent.emit();
    this.modal.close();
  }

  onAbort(message:string){
    this.modal.dismiss();
  }
}
