import { Component, OnInit } from '@angular/core';

import { Offer } from '../offer.model';
import { OffersService, PlacesService } from '../../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  placeFilter: string = "All" 
  myTab = [1, 2, 3, 4, 5, 6, 7];

  constructor(
    private offerService: OffersService,
    private placesService: PlacesService) {

    this.placesService.filterValue.subscribe(
      (filter: string) => {
        console.log('FilterValue: : ' + filter);
        this.placeFilter = filter;
        this.offers = this.offerService.filterbyPlace( filter );
        console.log(this.offers);
      }

    );
  }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }



}
