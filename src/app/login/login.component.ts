import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService, AUTHENTICATED_USER, TOKEN } from '../service/basic-authentication.service.';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credencials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    if ( sessionStorage.getItem(AUTHENTICATED_USER) && sessionStorage.getItem(TOKEN) ) {
      this.router.navigate(['/todos']);
    }
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
        this.router.navigate(['/welcome', this.username]);
        this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe (data => {
      console.log(data);
      this.router.navigate(['/welcome', this.username]);
      this.invalidLogin = false;
    }, e => {
      console.log(e);
      this.invalidLogin = true;
    });
  }
}
