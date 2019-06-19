import {Component, DoCheck, OnInit} from '@angular/core';
import { OfferService } from '../../../services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit, DoCheck {
  offers = [];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offerService.downloadOffers();
    this.offers = this.offerService.getOffers();
  }

  ngDoCheck() {
    this.offers = this.offerService.getOffers();
  }

}
