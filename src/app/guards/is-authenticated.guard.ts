import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private readonly router: Router) {}

  canActivate() {
    return true;
    // this.router.navigate(['user']);
    // return false;
  }
}

