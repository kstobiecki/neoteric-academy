import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { OffersService } from '.';
import { Offer } from './offers.service';


@Injectable()
export class OfferResolver implements Resolve<Offer>{

  constructor(private offersService: OffersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer> | Promise<Offer> | Offer {
    return this.offersService.getOffer(route.params['single-offer']);
  }

}
