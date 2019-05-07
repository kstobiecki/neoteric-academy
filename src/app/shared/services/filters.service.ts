import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Place {
  city: string;
  url: string;
}

export interface FiltersInterface {
  place: string;
  tech: string;
}

@Injectable()
export class FiltersService {

  places: Place[] = [
    {
      city: 'Gdańsk',
      url: 'gdansk'
    },
    {
      city: 'Gdynia',
      url: 'gdynia'
    },
    {
      city: 'Warszawa',
      url: 'warszawa'
    },
    {
      city: 'Wrocław',
      url: 'wroclaw'
    },
    {
      city: 'Kraków',
      url: 'krakow'
    },
  ]

  filtersChanged = new Subject<FiltersInterface>();

  filters : FiltersInterface = {
    place: 'all',
    tech: 'all'
  }



  constructor() { }

  getPlaces() {
    return this.places.slice();
  }

  getFilters() {
    return this.filters;
  }
  getFilter(property) { return this.filters[property]; }

  updateFilterPlace(newPlaceValue: string) {
    this.filters.place = newPlaceValue;
    this.filtersChanged.next(this.filters);
  }

  getCityByUrl(url: string){
    if (url === undefined){
      return 'All';
    }
    else {
      let fPlace: Place[] = this.places.filter(
        function (el) {
          return el.url === url;
        }
      );
      return fPlace[0].city;
    }
  }
}
