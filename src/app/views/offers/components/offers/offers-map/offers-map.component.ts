import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { AppRouterUrls } from '../../../../../app-routing.config';
import { OffersInterface } from '../offers.interface';

@Component({
  selector: 'app-offers-map',
  templateUrl: './offers-map.component.html',
  styleUrls: ['./offers-map.component.scss']
})
export class OffersMapComponent implements OnInit {
  appRouterUrls = AppRouterUrls;
  offers = [];

  lat: number = 52.044925;
  lng: number = 19.069815;
  zoom: number;

  private icon = {
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
    scaledSize: {
      height: 30,
      width: 30
    },
  };

  constructor(private offerService: OfferService) {
  }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
    this.zoom = 6;
  }

  onMarkerClick(offer) {
    this.lat = this.offerService.getOfferLat(offer.i);
    this.lng = this.offerService.getOfferLng(offer.i);
    this.zoom = this.offerService.getZoom();
  }

  markerOut(m: OffersInterface) {
    m.markerAnimation = '';
  }

  markerOver(m: OffersInterface) {
    m.markerAnimation = 'BOUNCE';
  }
}
