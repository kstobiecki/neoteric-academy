import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';

import { FiltersService } from '../../services';
import { Place } from '../../services/filters.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  appRouterUrls = AppRouterUrls;


  constructor(private filterService: FiltersService) { }

  places: Place[];  

  ngOnInit() {
    this.places = this.filterService.getPlaces();
  }

  onSelectPlace(newPlace: string){
    this.filterService.updateFilterPlace(newPlace);    
  }

}
