import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { CreateTaskComponent } from './home-component/Components/create-task/create-task.component';
import { ListTasksComponent } from './home-component/Components/list-tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    ListTasksComponent,
    CreateTaskComponent,
    DeleteModalComponent
  ],
  exports: [
    HomeComponent,
    ListTasksComponent
  ],
  providers: [
    NgbActiveModal
  ]
})
export class HomeModule { }
