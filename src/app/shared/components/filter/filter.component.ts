import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
