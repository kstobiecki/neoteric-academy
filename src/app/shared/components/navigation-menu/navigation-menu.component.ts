import { Component, Output } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  appRouterUrls = AppRouterUrls;

  constructor() {
    }
  }
