import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../constans';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() languageList;
  @Input() defaultLanguage;
  @Output() onLanguageChangeEvent = new EventEmitter<string>();
  
  selectedLanguage = Constants.DEFAULT_LANGUAGE;
  
  constructor(){}

  ngOnInit() {
  }

  useLanguage(language:string) {
    this.onLanguageChangeEvent.emit(language);
  }
}
