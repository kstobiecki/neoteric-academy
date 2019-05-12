import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// import { Offer } from '../offer.model';
import { FiltersService } from '../../../../../shared/services';
import { OffersService } from '../../../services';
import { FiltersInterface, FiltersUrlInterface } from 'src/app/shared/services/filters.service';
import { Offer } from '../../../services/offers.service'

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit, OnDestroy {
  offers: Offer[];
  filters: FiltersInterface = this.filterService.getFilters();
  fromRouteParameters: Object;
  urls: FiltersUrlInterface = this.filterService.getUrls();
  place: string;
  technology: string;
  level: string;
  filterSubscription: Subscription;
  offerparams:Subscription;

  constructor(
    private offerService: OffersService,
    private filterService: FiltersService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit() {
    
    //Loading on init
  
    this.fromRouteParameters =  {...this.route.snapshot.params};
    
    //ustawiamy brakujące filtry na domyślne wartości
    Object.keys(this.urls).map((key) => {     
      if (this.fromRouteParameters.hasOwnProperty(key)) {
        this.urls[key] = this.fromRouteParameters[key];          
      }
    });  
    
    this.filterService.updateFiltersbyUrls(this.urls);

    this.offers = this.offerService.filterOffers(this.filters);

    //loading when filterService changed
    this.filterSubscription = this.filterService.filtersChanged.subscribe(
      (newFilters: FiltersInterface) => {
        this.filters = newFilters;
        this.offers = this.offerService.filterOffers(newFilters);
      }
    );

    this.offerparams = this.route.params
      .subscribe(
        (params: Params) => {
          this.offerService.paramsFromOffer.next(params);
        }
      );

  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
    this.offerparams.unsubscribe();
  }


}
