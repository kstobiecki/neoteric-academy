import { Injectable } from '@angular/core';
import { FiltersInterface, FiltersUrlInterface } from 'src/app/shared/services/filters.service';
import { Subject } from 'rxjs';
import { Params } from '@angular/router';

export interface Offer {
  id: number;
  position: string;
  salaryMin: number;
  salaryMax: number;
  company: string;
  place: string[];
  technologies: string[];
  levels: string[];
  url: string;
}
@Injectable()
export class OffersService {
  private offers: Offer[] = [
    {
      id: 1,
      position: 'Front End Developer',
      salaryMin: 5,
      salaryMax: 12,
      company: 'Netguru',
      place: [
        "Gdańsk"
      ],
      technologies: [
        "JS", "HTML"
      ],
      levels: [
        "Junior", "Mid"
      ],
      url: "pierwsza-oferta"
    },
    {
      id: 2,
      position: "Backend End Developer",
      salaryMin: 12,
      salaryMax: 25,
      company: "Netguru",
      place: [
        "Warszawa", "Gdańsk"
      ],
      technologies: [
        "PHP"
      ],
      levels: [
        "Junior", "Senior"
      ],
      url: "druga-oferta"
    },
    {
      id: 3,
      position: "DevOps Engineer",
      salaryMin: 4,
      salaryMax: 6,
      company: "Netguru",
      place: [
        "Gdynia", "Remote"
      ],
      technologies: [
        "RUBY", "HTML"
      ],
      levels: [
        "Mid"
      ],
      url: "trzecia-oferta"
    },
    {
      id: 4,
      position: "PHP/Magento Developer",
      salaryMin: 7,
      salaryMax: 17,
      company: "Netguru",
      place: [
        "Wrocław",
      ],
      technologies: [
        "JS", "HTML", "Testing", "Ruby", "PHP"
      ],
      levels: [
        "Junior", "Mid", "Senior"
      ],
      url: "czwarta-oferta"
    },
    {
      id: 5,
      position: "Node.js Developer",
      salaryMin: 8,
      salaryMax: 19,
      company: "Netguru",
      place: [
        "Warszawa"
      ],
      technologies: [
        "JS", "Testing"
      ],
      levels: [
        "Junior", "Mid"
      ],
      url: "piata-oferta"
    },
    {
      id: 6,
      position: "Test Engineer",
      salaryMin: 6,
      salaryMax: 20,
      company: "Netguru",
      place: [
        "Kraków", "Remote"
      ],
      technologies: [
        "Testing", "Ruby", "PHP"
      ],
      levels: [
        "Mid"
      ],
      url: "szosta-oferta"
    }
  ];

  paramsFromOffer = new Subject<Params>();

  getOffers() {
    return this.offers.slice();
  }

  getOffer(url: string) {
    const offer = this.offers.find(
      (s) => {
        return s.url === url;
      }
    );
    return offer;
  }

  filterOffers(filtersSetup: FiltersInterface) {
    let filteredOffers: Offer[];

    filteredOffers = this.offers.filter(function (el) {
      let placeFilter: Boolean;
      let techFilter: Boolean;
      let levelFilter: Boolean;
      let salaryMinFilter: Boolean;
      let salaryMaxFilter: Boolean;

      if (filtersSetup.place == "all" || filtersSetup.place == "All") {
        placeFilter = true;
      }
      else {
        placeFilter = el.place.some(function (pl) {
          return pl === filtersSetup.place;
        });
      }

      if (filtersSetup.tech == "all" || filtersSetup.tech == "All") {
        techFilter = true;
      }
      else {
        techFilter = el.technologies.some(function (te) {
          return te === filtersSetup.tech;
        });
      }

      if (filtersSetup.level == "all" || filtersSetup.level == "All") {
        levelFilter = true;
      }
      else {
        levelFilter = el.levels.some(function (lv) {
          return lv === filtersSetup.level;
        });
      }

      if ( filtersSetup.salaryMin == 0 || filtersSetup.salaryMin <= el.salaryMin ) {
        salaryMinFilter = true;
      }
      else {       
          return false;
        }
      

      if (filtersSetup.salaryMax == 0 || filtersSetup.salaryMax >= el.salaryMax ) {
        salaryMaxFilter = true;
      }
      else {       
          return false;        
      }


      return placeFilter && techFilter && levelFilter && salaryMinFilter && salaryMaxFilter;
    });

    return filteredOffers;
  }

  
  constructor() { }

}
