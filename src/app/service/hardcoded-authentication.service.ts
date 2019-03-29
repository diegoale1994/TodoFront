import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'zchuldiner' && password === 'hangar18') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    } else {
      return false;
    }
}

isUserLoggedIn() {
  // tslint:disable-next-line:prefer-const
  let user = sessionStorage.getItem('authenticaterUser');
  return !(user === null);
  }

  loggout() {
    sessionStorage.removeItem('authenticaterUser');
  }

}
