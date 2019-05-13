import { Component, Input, OnInit } from '@angular/core';
import { OffersInterface } from '../../offers.interface';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() offer: OffersInterface;
  @Input() index: number;

  ngOnInit() {
  }

}
