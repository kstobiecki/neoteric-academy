import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Offer, OffersService } from 'src/app/views/offers/services/offers.service';



@Component({
  selector: 'app-offer-single',
  templateUrl: './offer-single.component.html',
  styleUrls: ['./offer-single.component.scss']
})
export class OfferSingleComponent implements OnInit {
  offer: Offer;


  constructor(
    private offersService: OffersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const url = this.route.snapshot.params['url'];
    this.offer = this.offersService.getOffer(url);


    this.route.data
    .subscribe(
      (data: Data) => {
        this.offer = data['offer'];
      }
    );
  }

}
