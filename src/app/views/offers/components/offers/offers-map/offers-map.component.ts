import {Component, DoCheck, OnInit} from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { AppRouterUrls } from '../../../../../app-routing.config';
import { OffersInterface } from '../offers.interface';

@Component({
  selector: 'app-offers-map',
  templateUrl: './offers-map.component.html',
  styleUrls: ['./offers-map.component.scss']
})
export class OffersMapComponent implements OnInit, DoCheck {
  appRouterUrls = AppRouterUrls;
  offers = [];

  lat: number = 52.044925;
  lng: number = 19.069815;
  zoom: number;

  icon = {
    url: '',
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

  ngDoCheck() {
    this.offers = this.offerService.getOffers();
  }

  onMarkerClick(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.zoom = 8;
  }

  markerOut(m: OffersInterface) {
    m.markerAnimation = '';
  }

  markerOver(m: OffersInterface) {
    m.markerAnimation = 'BOUNCE';
  }

  getImage(image) {
    this.icon.url = image;
    return this.icon;
  }
}
