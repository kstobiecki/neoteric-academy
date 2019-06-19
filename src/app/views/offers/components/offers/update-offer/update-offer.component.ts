import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../../../app-routing.config';
import { OfferService } from '../../../services/offer.service';
import { Offer } from '../../../../../shared/shared.interface';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent implements OnInit {
  appRouterUrls = AppRouterUrls;
  cities = [
    {name: 'Warszawa'},
    {name: 'Kraków'},
    {name: 'Wrocław'},
    {name: 'Trójmiasto'},
    {name: 'Bydgoszcz'},
    {name: 'Olsztyn'},
    {name: 'Szczecin'},
  ];

  techs = [
    {name: 'JS'},
    {name: 'HTML'},
    {name: 'PHP'},
    {name: 'Ruby'},
    {name: 'Python'},
    {name: 'Java'},
    {name: '.Net'},
    {name: 'Scala'},
    {name: 'C'},
    {name: 'Mobile'},
    {name: 'Testing'},
    {name: 'DevOps'},
    {name: 'UX/UI'},
    {name: 'PM'},
    {name: 'Game'},
    {name: 'Blockchain'},
    {name: 'Security'},
    {name: 'Data'},
    {name: 'Golang'},
    {name: 'SAP'},
    {name: 'Other'}
  ];

  expLvl = [
    {name: 'All'},
    {name: 'Junior'},
    {name: 'Mid'},
    {name: 'Senior'},
  ];

  offer: Offer;
  jobTitle: string = '';
  companyName: string = '';
  city: string = '';
  technology: string = '';
  expLevel: string = '';
  salary = {min: null, max: null};
  imagePath: string = '';
  latitude: number;
  long: number;
  details: string = '';
  requirements: string = '';

  skills = [{name: '', lvl: null}];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.setOfferData(this.offerService.getOfferData());
  }

  add() {
    this.skills.push({name: '', lvl: null});
  }

  async updateOffer() {
    // tslint:disable-next-line:max-line-length
    await this.offerService.updateOffer(this.jobTitle, this.companyName, this.city, this.technology, this.expLevel, this.salary, this.imagePath, this.latitude, this.long, this.details, this.requirements, this.skills);
  }

  setOfferData(offer: Offer) {
    this.jobTitle = offer.jobTitle;
    this.companyName = offer.companyName;
    this.city = offer.city;
    this.technology = offer.technology;
    this.expLevel = offer.expLvl;
    this.salary = offer.salary;
    this.imagePath = offer.imagePath;
    this.latitude = offer.lat;
    this.long = offer.lng;
    this.details = offer.details;
    this.requirements = offer.requirements;
    this.skills = offer.skills;
  }
}
