import { Component, DoCheck } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { AuthService } from './views/auth/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  test1 = true;
  hideFilters;

  constructor(private sharedService: SharedService,
              private authService: AuthService) {
  }

  ngDoCheck() {
    this.test1 = this.sharedService.canDisplaySidenav;
    this.hideFilters = this.authService.hideFilters;
  }

  onClick() {
    this.sharedService.onClick();
  }
}
