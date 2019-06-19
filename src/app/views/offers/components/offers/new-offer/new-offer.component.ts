import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../../../app-routing.config';
import { OfferService } from '../../../services/offer.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent implements OnInit {
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
  }

  add() {
    this.skills.push({name: '', lvl: null});
  }

  async addOffer() {
    // tslint:disable-next-line:max-line-length
    await this.offerService.addOffer(this.jobTitle, this.companyName, this.city, this.technology, this.expLevel, this.salary, this.imagePath, this.latitude, this.long, this.details, this.requirements, this.skills);
  }

}
