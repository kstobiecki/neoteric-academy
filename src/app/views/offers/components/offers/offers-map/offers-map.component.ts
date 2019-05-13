import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';

@Component({
  selector: 'app-offers-map',
  templateUrl: './offers-map.component.html',
  styleUrls: ['./offers-map.component.scss']
})
export class OffersMapComponent implements OnInit {
  offers = this.offerService.offers;

  lat: number = 52.044925;
  lng: number = 19.069815;
  zoom: number = 6;

  private icon = {
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
    scaledSize: {
      height: 30,
      width: 30
    },
  };

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

}
