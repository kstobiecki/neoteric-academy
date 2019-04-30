import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Offer } from '../offer.model';
import { OffersService } from '../../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  constructor(
    private offerService: OffersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.offers = this.offerService.getOffers();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
