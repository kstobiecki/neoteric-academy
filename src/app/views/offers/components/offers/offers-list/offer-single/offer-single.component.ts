import { Component, OnInit, Input } from '@angular/core';

import { Offer } from '../../offer.model';
import { OffersService } from '../../../../services';


@Component({
  selector: 'app-offer-single',
  templateUrl: './offer-single.component.html',
  styleUrls: ['./offer-single.component.scss']
})
export class OfferSingleComponent implements OnInit {
  @Input() offer: Offer;
  @Input() index: number;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
  }

}
