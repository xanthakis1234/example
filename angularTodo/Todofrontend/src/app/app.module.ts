import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@NgModule({
  declarations: [    
    AppComponent,
    ListTasksComponent,
    HeaderComponent,
    FooterComponent,
    CreateTaskComponent,
    DeleteModalComponent      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
