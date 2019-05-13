import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  appRouterUrls = AppRouterUrls;

  constructor(private sharedService: SharedService) {
    }

    onClick() {
      this.sharedService.onClick();
    }
  }
