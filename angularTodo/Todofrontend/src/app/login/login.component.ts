import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/todo-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errorMessage = "Invalid Credentials";
  invalidLogin = false;
  

  constructor(private router: Router,
    private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.get('username').value == "nek" && 
        this.profileForm.get('password').value == "1234"){
          
          this.invalidLogin = false;
          this.router.navigate(['home'])
          this.todoDataService.onLogIn();
    } else {
      this.invalidLogin = true;
    }
 }

}
