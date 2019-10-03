import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LogoutComponent } from './Modals/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    DeleteModalComponent,
    LogoutComponent
  ],
  exports: [
    CommonModule,
    TranslateModule,
    DeleteModalComponent,
    LogoutComponent
  ],
  providers: [
    NgbActiveModal
  ]

})
export class SharedModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
