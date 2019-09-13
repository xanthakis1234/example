import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ListTasksComponent,
    CreateTaskComponent
  ],
  exports: [
    HomeComponent,
    ListTasksComponent
  ]
})
export class HomeModule { }
