import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../service/authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errorMessage = "Invalid Credentials";
  invalidLogin = false;
  submitted = false;
  error = '';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get controlls(){
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid){
      this.invalidLogin = true;
      console.log("invalid form")
      return;
    }else {
      this.authenticationService.login(this.controlls.username.value, this.controlls.password.value)
        .pipe(first())
        .subscribe(
            data=>{
              this.router.navigate(['home'])
              this.invalidLogin = false;
              console.log("valid form")
            },
            error => {
              this.invalidLogin = true;
              this.error = error;
          });
      }
 }

}
