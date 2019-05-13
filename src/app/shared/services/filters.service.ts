import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { OffersService } from 'src/app/views/offers/services';

export interface Place {
  city: string;
  url: string;
  coordinates: number[];
}

export interface TechFilter {
  name: string;
  url: string;
  icon: string;
}

export interface LevelFilter {
  name: string;
  url: string;
}

export interface FiltersInterface {
  place: string;
  tech: string;
  level: string;
  salaryMin: number;
  salaryMax: number;
}

export interface FiltersUrlInterface {
  place: string;
  tech: string;
  level: string;
  salaryMin: string;
  salaryMax: string;
}

@Injectable()
export class FiltersService {

constructor(private offerService: OffersService) {}

  places: Place[] = [
    {
      city: 'All',
      url: 'all',
      coordinates: [52.234982, 21.008490]
    },
    {
      city: 'Gdańsk',
      url: 'gdansk',
      coordinates: [54.352024, 18.646639]
    },
    {
      city: 'Gdynia',
      url: 'gdynia',
      coordinates: [54.518890, 18.530540]
    },
    {
      city: 'Warszawa',
      url: 'warszawa',
      coordinates: [52.229675, 21.012230]
    },
    {
      city: 'Wrocław',
      url: 'wroclaw',
      coordinates: [51.107883, 17.038538]
    },
    {
      city: 'Kraków',
      url: 'krakow',
      coordinates: [50.064651, 19.944981]
    },
    {
      city: 'Remote',
      url:'remote',
      coordinates: []
    }
  ]

  technologies: TechFilter[] = [
    {
      name: 'All',
      url: 'all',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/other.png'
    },
    {
      name: 'HTML',
      url: 'html',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/html.png'
    },
    {
      name: 'JS',
      url: 'javascript',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/javascript.png'
    },
    {
      name: 'PHP',
      url: 'php',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/php.png'
    },
    {
      name: 'Ruby',
      url: 'ruby',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/ruby.png'
    },
    {
      name: 'Testing',
      url: 'testing',
      icon: 'https://bucket.justjoin.it/marker_icons_circle/testing.png'
    },
  ]

  levels: LevelFilter[] = [
    {
      name: 'All',
      url: 'all'
    },
    {
      name: 'Junior',
      url: 'junior'
    },
    {
      name: 'Mid',
      url: 'mid'
    },
    {
      name: 'Senior',
      url: 'senior'
    },
  ]

  filtersChanged = new Subject<FiltersInterface>();
  filtersUrlsChanged = new Subject<FiltersUrlInterface>();

  private filters : FiltersInterface = {
    place: 'All',
    tech: 'All',
    level: 'All',
    salaryMin: 0,
    salaryMax: 0
  }

  private filtersUrls: FiltersUrlInterface ={
    place: 'all',
    tech: 'all',
    level: 'all',
    salaryMin: '-',
    salaryMax: '-'
  }


  getPlaces() {
    return this.places.slice();
  }
  getTechs(){
    return this.technologies.slice();
  }
  
  getLevels(){
    return this.levels.slice();
  }

  getFilters() {
    return this.filters;
  }

  getFilter(property) { return this.filters[property]; }


  private updateUrls(){
    let thisFilters: FiltersInterface = this.filters;

    let newPlaceUrl: Place = this.places.find(
      function (el){        
        return el.city === thisFilters.place;
      }
    );
    this.filtersUrls.place = newPlaceUrl.url;
    
    let newTechUrl: TechFilter = this.technologies.find(
      function (el) {
        return el.name === thisFilters.tech;
      }
    );
    this.filtersUrls.tech = newTechUrl.url;

    let newLvlhUrl: LevelFilter = this.levels.find(
      function (el) {
        return el.name === thisFilters.level;
      }
    );
    this.filtersUrls.level = newLvlhUrl.url;  

    this.filtersUrlsChanged.next(this.filtersUrls);
    
    
    // this.filtersUrls.salaryMin = newSalaryMin[0].url;;
    // this.filtersUrls.salaryMax = newSalaryMax[0].url;;
  }  


  updateFilter(property, newPlaceValue: string) {
    this.filters[property] = newPlaceValue;
    this.updateUrls();
    this.filtersChanged.next(this.filters); 
  }

  updateFilters(place: string, tech: string, level: string, salaryMin: number, salaryMax: number) {
    this.filters.place = place;
    this.filters.tech = tech;
    this.filters.level = level;
    this.filters.salaryMin = salaryMin;
    this.filters.salaryMax = salaryMax;
    this.updateUrls();
    this.filtersChanged.next(this.filters);
  }

  updateFiltersbyUrls(urls: FiltersUrlInterface){

    let newPlaceFilter: Place = this.places.find(
      function (el){        
        return el.url === urls.place;
      }
    );
    this.filters.place = newPlaceFilter.city;
    
    let newTechFilter: TechFilter = this.technologies.find(
      function (el) {
        return el.url === urls.tech;
      }
    );
    this.filters.tech = newTechFilter.name;

    let newLvlFilter: LevelFilter = this.levels.find(
      function (el) {
        return el.url === urls.level;
      }
    );
    this.filters.level = newLvlFilter.name; 

    this.filters.salaryMin = urls.salaryMin === '-' ? 0 : +urls.salaryMin; 
    this.filters.salaryMax = urls.salaryMax === '-' ? 99999 : +urls.salaryMax; 

    this.filtersUrlsChanged.next(urls);     
    this.filtersChanged.next(this.filters);
  }


  getUrl(property){
    return {...this.filtersUrls[property]};
  }

  getUrls(){
    return {...this.filtersUrls};
  }

  getMinSalary(){
    const offers = this.offerService.getOffers();
    const offersSalaryMin: number[] = [];
    for (let offer of offers){      
      offersSalaryMin.push(offer.salaryMin);
    }
    return Math.min(...offersSalaryMin);
  }

  getMaxSalary(){
    const offers = this.offerService.getOffers();
    let offersSalaryMax: number[] = [];
    for (let offer of offers){
      offersSalaryMax.push(offer.salaryMax);
    }    
    return Math.max(...offersSalaryMax);
  }
}
