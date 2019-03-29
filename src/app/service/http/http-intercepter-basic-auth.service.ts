import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service.';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    // let basicAuthHeaderString = 'basic ' + window.btoa(username + ':' + password);
    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }
}
