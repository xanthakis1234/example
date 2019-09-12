import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './home/Components/create-task/create-task.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/Components/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: CreateTaskComponent }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
