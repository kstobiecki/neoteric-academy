import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  offers = [];

  constructor(private offerService: OfferService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

}
