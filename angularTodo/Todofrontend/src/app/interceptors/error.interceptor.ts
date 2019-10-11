import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthenticationService } from "../service/authentication-service.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    errorMessage = '';
    constructor(private authenticationService: AuthenticationService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(
            error=>{
                if (error.status === 401){
                    this.errorMessage = 'Invalid Credentials';
                }
                return throwError(this.errorMessage);
            }
        ))
    }
}