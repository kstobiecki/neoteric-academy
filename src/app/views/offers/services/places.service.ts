import { Injectable, EventEmitter } from '@angular/core';
import { Place } from '../components/places/places.model';


@Injectable()
export class PlacesService {

  private places: Place[] = [
    new Place('Trójmiasto'),
    new Place('Warszawa'),
    new Place('Kraków'),
    new Place('Wrocław')
  ];


  constructor() { }

  filterValue = new EventEmitter<string>();

  getPlaces() {
    return this.places.slice();
  }

  getPlace(id) {
    return this.places[id];
  }


}
