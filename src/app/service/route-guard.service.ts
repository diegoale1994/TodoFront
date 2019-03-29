import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
     this.router.navigate(['/login']);
    }
  }
}
