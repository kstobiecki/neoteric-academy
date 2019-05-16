import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../../views/auth/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
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
