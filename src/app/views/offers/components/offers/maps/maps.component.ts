import { Component, OnInit, ViewChild } from '@angular/core';

import { icon, latLng, marker, polyline, tileLayer, point, circle, polygon, Map } from 'leaflet';
import { OffersService } from '../../../services';
import { Offer } from '../../../services/offers.service';
import { FiltersService } from 'src/app/shared/services';
import { TechFilter, FiltersInterface, FiltersUrlInterface } from 'src/app/shared/services/filters.service';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';


declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  @ViewChild('mapa') mapa: Map;

  filterSubscription: Subscription;
  paramsSubscription: Subscription;
  filters: FiltersInterface = this.filterService.getFilters();
  urls: FiltersUrlInterface = this.filterService.getUrls();
  
  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  MapIcon = L.Icon.extend({
    options: {
      shadowUrl: '',
      iconSize: [40, 40],
      shadowSize: [50, 64],
      iconAnchor: [40, 40],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    }
  });

  // An array of layers for markers
  markers = [];

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.streetMaps],
    zoom: 6,
    center: latLng([52.234982, 21.008490])
  };



  constructor(private offerService: OffersService, private filterService: FiltersService) { }

  offers: Offer[] = this.offerService.getOffers();
  technologies: TechFilter[] = this.filterService.getTechs();

  generateIcons() {
    let icons = {};
    for (let filter of this.technologies) {
      icons[filter.name] = new this.MapIcon({ iconUrl: filter.icon });
    }
    return icons;

  }

  generateMarkers(offers: Offer[]) {
    let icons = this.generateIcons();

    for (let offer of offers) {
      let offerIcon = icons[offer.technologies[0]];
      let offermarker = marker([offer.coordinates[0], offer.coordinates[1]], {
        icon: offerIcon
      });
      this.markers.push(offermarker);
    }
  }


  onMapReady(point: number[], map: Map) {
    map.flyTo([point[0], point[1]], 12);
  }

  ngOnInit() {
    

    this.offers = this.offerService.filterOffers(this.filters);
    this.generateMarkers(this.offers);

    this.filterSubscription = this.filterService.filtersChanged.subscribe(
      (newFilters: FiltersInterface) => {
        this.filters = newFilters;        
        this.offers = this.offerService.filterOffers(newFilters);
        this.markers = [];
        this.generateMarkers(this.offers);
      }
    );



  }

  onClickButton() {
    this.markers.pop();

  }


}
