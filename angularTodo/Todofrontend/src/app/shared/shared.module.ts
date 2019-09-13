import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    DeleteModalComponent
  ],
  exports: [
    CommonModule,
    DeleteModalComponent
  ],
  providers: [
    NgbActiveModal
  ]

})
export class SharedModule { }
