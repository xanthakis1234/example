import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Constants } from './constans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private translateService: TranslateService
  LANGUAGE_LIST = Constants.LANGUAGE_LIST;

  constructor(private translate: TranslateService) {
    this.translateService = translate;
    this.translateService.setDefaultLang(Constants.DEFAULT_LANGUAGE);
  }

  ngOnInit(): void {}

  changeLanguage(language:string) {
    this.translateService.use(language);
  }

}