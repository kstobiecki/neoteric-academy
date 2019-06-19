import { Injectable } from '@angular/core';
import { OffersInterface } from '../components/offers/offers.interface';
import { HttpClientService } from '../../../shared/http';
import { Offer } from '../../../shared/shared.interface';
import { SharedService } from '../../../shared/services/shared.service';

@Injectable()
export class OfferService {
  offers: OffersInterface[] = [];
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-18T10:40:15.000Z',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal2',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-05',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3.amazonaws.com/pixtruder/original_images/9fbb73a7cba9b7b75c3d05484f6b6d087470641d',
  //     lat: 54.372158,
  //     lng: 18.638306,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 40}, {name: 'skill2', lvl: 20}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 60}, {name: 'skill6', lvl: 100}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}],
  //     date: '2019-06-05',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 51.107883,
  //     lng: 17.038538,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-07',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-10',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-10',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   },
  //   {
  //     author: 'autor',
  //     jobTitle: 'Frontend Developer',
  //     companyName: 'CoinDeal',
  //     city: 'Wrocław',
  //     technology: 'JavaScript',
  //     salary: {min: 6000, max: 10000},
  //     expLvl: 'Junior',
  //     imagePath: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png',
  //     lat: 52.237049,
  //     lng: 21.017532,
  //     markerAnimation: '',
  //     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
  //       'incididunt ut labore et dolore magna aliqua. ' +
  //       'Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
  //       'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
  //       'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
  //       'culpa qui officia deserunt mollit anim id est laborum.',
  //     requirements: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
  //     skills: [{name: 'skill1', lvl: 20}, {name: 'skill2', lvl: 40}, {name: 'skill3', lvl: 100}, {name: 'skill4', lvl: 60},
  //       {name: 'skill5', lvl: 80}, {name: 'skill6', lvl: 60}, {name: 'skill7', lvl: 20},
  //       {name: 'skill8', lvl: 40}, {name: 'skill9', lvl: 60}, {name: 'skill10', lvl: 20}],
  //     date: '2019-06-04',
  //   }
  // ];
  zoom = 8;

  offerData: Offer = {
    jobTitle: '',
    companyName: '',
  city: '',
  technology: '',
  expLvl: '',
  salary: { min: null, max: null },
  imagePath: '',
  lat: null,
  lng: null,
  details: '',
  requirements: '',
  skills: [],
  };

  constructor(private  httpClientService: HttpClientService,
              private sharedServ: SharedService) {}

  getOffers() {
    return this.offers.slice();
  }
  getOffer(index: number) {
    return this.offers[index];
  }
  getAuthor(index: number) {
    return this.offers[index].author;
  }

  setOfferData(offerData: Offer) {
    this.offerData = offerData;
  }
  getOfferData() {
    return this.offerData;
  }

    // tslint:disable-next-line:max-line-length
  async addOffer(jobTitle: string, companyName: string, city: string, technology: string, expLvl: string, salary: {min: number, max: number}, imagePath: string, latitude: number, long: number, details: string, requirements: string, skills: {name: string, lvl: any}[]): Promise<any> {
    let offer: Offer = {jobTitle: jobTitle, companyName: companyName, city: city, technology: technology, expLvl: expLvl, salary: salary, imagePath: imagePath, lat: latitude, lng: long, details: details, requirements: requirements, skills: skills};
     let resp = await this.httpClientService.addOffer(offer);
     return resp;
  }

  // tslint:disable-next-line:max-line-length
  async updateOffer(jobTitle: string, companyName: string, city: string, technology: string, expLvl: string, salary: {min: number, max: number}, imagePath: string, latitude: number, long: number, details: string, requirements: string, skills: {name: string, lvl: any}[]): Promise<any> {
    let offer: Offer = {jobTitle: jobTitle, companyName: companyName, city: city, technology: technology, expLvl: expLvl, salary: salary, imagePath: imagePath, lat: latitude, lng: long, details: details, requirements: requirements, skills: skills};
    let offerId = this.sharedServ.offerId;
    let resp = await this.httpClientService.updateOffer(offer, offerId);
      return resp;
  }

  async downloadOffers() {
    let params = Object.values(this.sharedServ.filterParams);
    this.offers = await this.httpClientService.getOffers(params);
    JSON.stringify(this.offers);
    return this.offers;
  }
}
