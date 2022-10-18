import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authservice:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authservice.getToken()}`);
    const modifiedReq = req.clone({
     headers
       //not used the append headers
       //setHeaders:{
       //  Authorisation:`Bearer ${this.authservice.getToken()}
     
         
      // }

       });
    return next.handle(modifiedReq);
    }

}