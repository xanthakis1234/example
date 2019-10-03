import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoDataService } from '../../../service/todo-data.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  // @Input() modalHeader: string
  // @Input() modalBody: string
  @Output() messageEvent = new EventEmitter();
  @Output() CancelEvent = new EventEmitter<string>();
  
  constructor(
    private modalService: NgbModal,
    private todoService: TodoDataService,
    private modal: NgbActiveModal) { }

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
