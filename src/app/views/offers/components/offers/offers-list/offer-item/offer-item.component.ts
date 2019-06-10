import { Component, Input, OnInit } from '@angular/core';
import { OffersInterface } from '../../offers.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() offer: OffersInterface;
  @Input() index: number;

  data;
  test1;

  ngOnInit() {
    this.data = moment(this.offer.date).fromNow();
    this.test1 = /hours/i.exec(this.data);
    if (this.test1 !== null) {
      this.data = 'New';
    }
  }

}
