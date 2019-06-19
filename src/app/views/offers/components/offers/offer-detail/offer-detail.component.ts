import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OffersInterface } from '../offers.interface';
import { AppRouterUrls } from '../../../../../app-routing.config';
import { SharedService } from '../../../../../shared/services/shared.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  offer: OffersInterface;
  author: string;
  id: any;
  appRouterUrls = AppRouterUrls;
  userID: string;
  canDisplayCRUD: boolean;

  constructor(private offerService: OfferService,
              private sharedService: SharedService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.offer = this.offerService.getOffer(this.id);
        this.author = this.offerService.getAuthor(this.id);
      }
    );
    this.checkAuthor();
  }

  checkAuthor() {
    this.userID = this.sharedService.getUserId();
    if (this.author === this.userID) {
      this.canDisplayCRUD = true;
    } else {
      this.canDisplayCRUD = false;
    }
  }

  async onDelete() {
    await this.sharedService.deleteOffer(this.offer._id);
  }

  sendOfferToUpdate() {
    this.offerService.setOfferData(this.offer);
    this.sharedService.offerId = this.offer._id;
  }

}
