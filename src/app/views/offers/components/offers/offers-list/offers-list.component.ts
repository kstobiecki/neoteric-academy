import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// import { Offer } from '../offer.model';
import { FiltersService } from '../../../../../shared/services';
import { OffersService } from '../../../services';
import { FiltersInterface } from 'src/app/shared/services/filters.service';
import { Offer } from '../../../services/offers.service'

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit, OnDestroy {
  offers: Offer[];
  filters: FiltersInterface = this.filterService.getFilters();
  filter: string = this.filterService.getFilter('place');
  place: string;
  filterSubscription: Subscription;

  constructor(
    private offerService: OffersService,
    private filterService: FiltersService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit() {
    
    console.log(this.offerService.getOffers());
    //Loading on init
    this.place = this.route.snapshot.params['place'];    
    this.filter = this.filterService.getCityByUrl(this.place);
    this.offers = this.offerService.filterbyPlace(this.filter);

    //loading when filterService.onSelectPlace
    this.filterSubscription = this.filterService.filtersChanged.subscribe(
      (filters: FiltersInterface) => {
        this.filter = filters.place;
        this.offers = this.offerService.filterbyPlace(this.filter);
      }
    );

  }
  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }


}
