import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Offer } from 'src/app/views/offers/services/offers.service';



@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss']
})
export class OffersItemComponent implements OnInit {
  @Input() offer: Offer;
  @Input() index: number;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot);
    // console.log(this.route.snapshot.params['technology']);
  

    // console.log(this.route);
  }

}
