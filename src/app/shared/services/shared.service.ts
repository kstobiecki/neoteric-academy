import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  canDisplaySidenav = false;

  onClick() {
    this.canDisplaySidenav = !this.canDisplaySidenav;
  }
}
