import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { Offer } from 'src/app/views/offers/services/offers.service';
import { AppRouterUrls } from '../../../../../../app-routing.config';



@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss']
})
export class OffersItemComponent implements OnInit {
  @Input() offer: Offer;
  @Input() index: number;

  appRouterUrls = AppRouterUrls;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   
  }

}
