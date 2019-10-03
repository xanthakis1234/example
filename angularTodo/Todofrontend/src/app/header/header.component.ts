import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../constans';
import { TodoDataService } from '../service/todo-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(
    public todoDataService: TodoDataService,
    private modalService: NgbModal){}

  ngOnInit() {
  }

  useLanguage(language:string) {
    this.onLanguageChangeEvent.emit(language);
  }

  checkIfLoggedIn(){
    return this.todoDataService.checkIfLoggedIn();
  }

  receiveMessage($event){
    console.log('logout modal sended an event on header')
  }
}
