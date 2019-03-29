import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = 'user';
    let password = 'hangar18';
    let basicAuthHeaderString = 'basic ' + window.btoa(username + ':' + password);
    req = req.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    });
    return next.handle(req);
  }
}
