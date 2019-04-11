import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  // opened: boolean = false;

  appRouterUrls = AppRouterUrls;

  constructor() {}

  // sidenavOpen() {
  //   this.opened = !this.opened;
  //   console.log(this.opened);
  // }
}
