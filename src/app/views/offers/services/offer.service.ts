import { Injectable } from '@angular/core';
import { OffersInterface } from '../components/offers/offers.interface';

@Injectable()
export class OfferService {
  offers: OffersInterface[] = [
    {
      i: 0,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 1,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 2,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal2',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 3,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3.amazonaws.com/pixtruder/original_images/9fbb73a7cba9b7b75c3d05484f6b6d087470641d',
      lat: 54.372158,
      lng: 18.638306,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [100, 'skill2'], [100, 'skill3'],
        [20, 'skill4'], [60, 'skill5'], [20, 'skill6'], [20, 'skill7'], [40, 'skill8']],
    },
    {
      i: 4,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 51.107883,
      lng: 17.038538,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 5,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 6,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 7,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 8,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 9,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 10,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {i: 11,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 12,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 13,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 14,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 15,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 16,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    },
    {
      i: 17,
      jobTitle: 'Frontend Developer',
      companyName: 'CoinDeal',
      city: 'Wrocław',
      technology: 'JavaScript',
      salary: '13000-17000',
      imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
      lat: 52.237049,
      lng: 21.017532,
      markerAnimation: '',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
        'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
        'culpa qui officia deserunt mollit anim id est laborum.',
      requirement: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      skills: [[60, 'skill1'], [40, 'skill2'], [100, 'skill3'], [60, 'skill4'], [80, 'skill5'],
        [20, 'skill6'], [20, 'skill7'], [20, 'skill8'], [60, 'skill9'], [20, 'skill10']],
    }
  ];
  zoom = 8;

  getOffers() {
    return this.offers.slice();
  }
  getOffer(index: number) {
    return this.offers[index];
  }
  getOfferLat(index: number) {
    return this.offers[index].lat;
  }
  getOfferLng(index: number) {
    return this.offers[index].lng;
  }
  getZoom() {
    return this.zoom;
  }
  getOfferCityName(index: number) {
    return this.offers[index].city;
  }
  getOfferTech(index: number) {
    return this.offers[index].technology;
  }
}
