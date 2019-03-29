import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPath(name: string) {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world/path-variable/' + name);
  }
}
