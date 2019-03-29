import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(API_URL + '/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPath(name: string) {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.get<HelloWorldBean>(API_URL + '/hello-world/path-variable/' + name);
  }
}
