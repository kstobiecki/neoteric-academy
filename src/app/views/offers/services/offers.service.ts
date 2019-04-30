import { Injectable } from '@angular/core';

import { Offer } from '../components/offers/offer.model';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private offers: Offer[] = [
    new Offer(  
      1,  
      'Front End Developer',
      '5000',
      'Netguru',
    ),
    new Offer(
      2,
      "Backend End Developer",
      "12000",
      "Netguru"
    ),
    new Offer(
      3,
      "DevOps Engineer",
      "4000",
      "Netguru"
    ),
    new Offer(
      4,
      "PHP/Magento Developer",
      "7000",
      "Netguru"
    ),
    new Offer(
      5,
      "Node.js Developer",
      "8000",
      "Netguru"
    ),
    new Offer(
      6,
      "Test Engineer",
      "6000",
      "Netguru"
    )
  ];
  getOffers() {
    return this.offers.slice();
  }
  getOffer(index: number) {
    return this.offers[index];
  }

  constructor() { }

}
