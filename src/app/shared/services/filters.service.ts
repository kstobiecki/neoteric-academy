import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { OffersService } from 'src/app/views/offers/services';

export interface Place {
  city: string;
  url: string;
}

export interface TechFilter {
  name: string;
  url: string;
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
      url: 'all'
    },
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
    {
      city: 'Remote',
      url:'remote'
    }
  ]

  technologies: TechFilter[] = [
    {
      name: 'All',
      url: 'all'
    },
    {
      name: 'HTML',
      url: 'html'
    },
    {
      name: 'JS',
      url: 'javascript'
    },
    {
      name: 'PHP',
      url: 'php'
    },
    {
      name: 'Ruby',
      url: 'ruby'
    },
    {
      name: 'Testing',
      url: 'testing'
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
