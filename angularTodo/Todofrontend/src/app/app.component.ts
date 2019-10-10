import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Constants } from './constans';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;
  private translateService: TranslateService
  LANGUAGE_LIST = Constants.LANGUAGE_LIST;
  DEFAULT_LANGUAGE = Constants.DEFAULT_LANGUAGE;
  
  constructor(
    private translate: TranslateService,
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.translateService = translate;
    this.translateService.setDefaultLang(Constants.DEFAULT_LANGUAGE);
  }

  ngOnInit(): void {}

  changeLanguage(language:string) {
    this.translateService.use(language);
  }
}