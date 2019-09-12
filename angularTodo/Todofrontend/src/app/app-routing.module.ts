import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './home/home-component/Components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './home/home-component/Components/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: ListTasksComponent },
  { path: 'add', component: CreateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
