import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  canDisplaySidenav = false;

  filterParams = [];

  onClick() {
    this.canDisplaySidenav = !this.canDisplaySidenav;
  }
}
