import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../constans';
import { TodoDataService } from '../service/todo-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service.service';
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
    public authenticationService: AuthenticationService,
    public todoDataService: TodoDataService,
    private router: Router,
    private modalService: NgbModal){}

  ngOnInit() {
  }

  useLanguage(language:string) {
    this.onLanguageChangeEvent.emit(language);
  }

  receiveMessage($event){
    console.log('logout modal sended an event on header')
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
