import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  hideFilters = false;

  constructor(private authService: AuthService,
              private offerService: OfferService) { }

  ngOnInit() {
    this.authService.hideFilters = this.hideFilters;
  }

}
