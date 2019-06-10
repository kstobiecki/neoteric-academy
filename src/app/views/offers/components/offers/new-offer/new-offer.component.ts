import { Component, OnInit } from '@angular/core';
import { AppRouterUrls } from '../../../../../app-routing.config';

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

  words2 = [{value: ''}];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.words2.push({value: ''});
  }

}
