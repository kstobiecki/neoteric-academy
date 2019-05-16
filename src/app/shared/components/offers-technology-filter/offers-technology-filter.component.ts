import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-technology-filter',
  templateUrl: './offers-technology-filter.component.html',
  styleUrls: ['./offers-technology-filter.component.scss']
})
export class OffersTechnologyFilterComponent {
  value: number = 0;
  highValue: number = 33000;

  techMain = [
    {name: 'JS',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'HTML',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'PHP',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Ruby',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Python',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Java',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: '.Net',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Scala',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'C',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Mobile',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Testing',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'DevOps',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'UX/UI',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'PM',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Game',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Blockchain',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Security',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Data',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Golang',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'SAP',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
    {name: 'Other',
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png'},
  ];

  expLvl = [
    {name: 'All'},
    {name: 'Junior'},
    {name: 'Mid'},
    {name: 'Senior'},
  ];

  salarySlider = false;

  onSalaryChoose() {
    this.salarySlider = !this.salarySlider;
    this.highValue = 33000;
}

}

