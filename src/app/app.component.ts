import {Component, DoCheck} from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  test1 = true;

  constructor(private sharedService: SharedService ) {
  }

  ngDoCheck() {
    this.test1 = this.sharedService.canDisplaySidenav;
  }
}
