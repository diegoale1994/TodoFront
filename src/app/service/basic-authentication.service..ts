import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';
export const LANG = 'lang';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username: string, password: string) {
    // tslint:disable-next-line:prefer-const
    return this.http.post<any>(API_URL + '/authenticate', { username, password })
    .pipe(
      map (data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      })
    );
  }


executeAuthenticationService(username: string, password: string) {
  // tslint:disable-next-line:prefer-const
  let basicAuthHeaderString = 'basic ' + window.btoa(username + ':' + password);
  // tslint:disable-next-line:prefer-const
  let headers = new HttpHeaders({
    Authorization: basicAuthHeaderString
  });
  return this.http.get<AuthenticationBean>(API_URL + '/basicauth', {headers})
  .pipe(
    map (data => {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      sessionStorage.setItem(TOKEN, basicAuthHeaderString);
      return data;
    })
  );
}

getAuthenticatedUser() {
  return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }}

  loggout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
