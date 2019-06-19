import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import {OfferService} from "../../../views/offers/services/offer.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cityVal: string = 'all';
   citiesMain = [
     {name: 'All'},
     {name: 'Warszawa'},
     {name: 'Kraków'},
     {name: 'Wrocław'},
     {name: 'Poznań'},
     {name: 'Trójmiasto'},
     {name: 'Remote'},
     {name: 'World'}];
     citiesDrop = [
     {name: 'Białystok'},
     {name: 'Bielsko-Biała'},
     {name: 'Bydgoszcz'},
     {name: 'Częstochowa'},
     {name: 'Gliwice'},
     {name: 'Katowice'},
     {name: 'Kielce'},
     {name: 'Lublin'},
     {name: 'Łódź'},
     {name: 'Olsztyn'},
     {name: 'Opole'},
     {name: 'Toruń'},
     {name: 'Rzeszów'},
     {name: 'Szczecin'},
  ];

  constructor(private sharedServ: SharedService,
              private offerService: OfferService) { }

  ngOnInit() {
  }

  onValChange(val: string) {
    this.cityVal = val;
    this.sharedServ.filterParams.city = this.cityVal;
  }

  async ongetOffers() {
    await this.offerService.downloadOffers();
  }
}
