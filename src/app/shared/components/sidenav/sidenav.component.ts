import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  appRouterUrls = AppRouterUrls;

  constructor(private sharedService: SharedService) {
  }
  onClick() {
    this.sharedService.onClick();
  }
}
