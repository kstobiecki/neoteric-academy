import { Injectable } from '@angular/core';

export interface Offer {
  id: number;
  position: string;
  salary: string;
  company: string;
  place: string;
}
@Injectable()
export class OffersService {
  private offers: Offer[] = [
    {
      id: 1,
      position: 'Front End Developer',
      salary: '5000',
      company: 'Netguru',
      place: 'Gdańsk'
    },
    {
      id: 2,
      position: "Backend End Developer",
      salary: "12000",
      company: "Netguru",
      place: "Warszawa"
    },
    {
      id: 3,
      position: "DevOps Engineer",
      salary: "4000",
      company: "Netguru",
      place: "Gdynia"
    },
    {
      id: 4,
      position: "PHP/Magento Developer",
      salary: "7000",
      company: "Netguru",
      place: "Wrocław"
    },
    {
      id: 5,
      position: "Node.js Developer",
      salary: "8000",
      company: "Netguru",
      place: "Warszawa"
    },
    {
      id: 6,
      position: "Test Engineer",
      salary: "6000",
      company: "Netguru",
      place: "Kraków"
    }
  ];  

  getOffers() {
    return this.offers.slice();
  }
  getOffer(index: number) {
    return this.offers[index];
  }

  filterbyPlace(city: string) {
    if (city === "All") {
      return this.offers.slice();
    } else {

      return this.offers.filter(
        function (el) {
          return el.place === city;
        }
      );
    }
  }
  constructor() { }

}
