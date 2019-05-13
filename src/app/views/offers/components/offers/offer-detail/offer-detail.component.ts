import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OffersInterface } from '../offers.interface';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  offer: OffersInterface;
  id: any;

  constructor(private offerService: OfferService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.offer = this.offerService.getOffer(this.id);
      }
    );
  }

}
