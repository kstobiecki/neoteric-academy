import { Component, OnInit } from '@angular/core';
import { Place } from './places.model';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places: Place[];
  selectedPlace: string = "all"

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

  onSelectPlace(newPlace: string){
    this.selectedPlace = newPlace;
    console.log('Log z places.component.ts: Place:' + this.selectedPlace);    
    this.placesService.filterValue.emit(newPlace);    
  }
}
