import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() languageList;
  @Output() onLanguageChangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  useLanguage(language:string) {
    this.onLanguageChangeEvent.emit(language);
  }
}
