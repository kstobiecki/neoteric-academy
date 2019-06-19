import { Component } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../../views/auth/services';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  appRouterUrls = AppRouterUrls;

  constructor(private sharedService: SharedService,
              private authService: AuthService) {
    }

    onClick() {
      this.sharedService.onClick();
    }

  hideFilters() {
    this.authService.hideFilters = true;
  }
  }
