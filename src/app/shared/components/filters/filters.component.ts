import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppRouterUrls } from '../../../app-routing.config';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { FiltersService } from '../../services';
import { Place, TechFilter, LevelFilter, FiltersUrlInterface, FiltersInterface } from '../../services/filters.service';
import { OffersService } from 'src/app/views/offers/services';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  appRouterUrls = AppRouterUrls;
  places: Place[];
  technologies: TechFilter[];
  levels: LevelFilter[];
  urls: FiltersUrlInterface = this.filterService.getUrls();
  paramsSubscription: Subscription;

  constructor(
    private filterService: FiltersService,
    private offersService: OffersService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  sliderMin: number = this.filterService.getMinSalary();
  sliderMax: number = this.filterService.getMaxSalary();
  

  salarySliderRange: number[] = [this.sliderMin, this.sliderMax];

  salarySliderConfig: any = {
    connect: true,
    step: 1,
    start: [this.sliderMin, this.sliderMax],
    tooltips: true,
    range: {
      min: 0,
      max: this.sliderMax
    },
    format: {
      to: function (value) {
        return value  + 'k';
      },
      from: function (value) {
        value = value.replace('k', '');
        return value;
      }
    }
  };

  onChangeSlider(value: any) {   
    this.filterService.updateFilter('salaryMin', value[0]);
    this.filterService.updateFilter('salaryMax', value[1]);
    this.router.navigate(['/', this.urls.place, this.urls.tech, this.urls.level, value[0], value[1]], { relativeTo: this.route });
  }



  ngOnInit() {
    this.urls = this.filterService.getUrls();

    this.paramsSubscription = this.offersService.paramsFromOffer
      .subscribe(
        (params: Params) => {
          this.urls.place = (params.place == undefined || !params.hasOwnProperty('place')) ? 'all' : params.place;
          this.urls.tech = (params.tech == undefined || !params.hasOwnProperty('tech')) ? 'all' : params.tech;
          this.urls.level = (params.tech == undefined || !params.hasOwnProperty('level')) ? 'all' : params.level;
          this.urls.salaryMin = (params.salaryMin == undefined || !params.hasOwnProperty('salaryMin')) ? '0' : params.salaryMin;
          this.urls.salaryMax = (params.salaryMax == undefined || !params.hasOwnProperty('salaryMax')) ? this.sliderMax : params.salaryMax;
          
          
          this.salarySliderRange = [+this.urls.salaryMin,  +this.urls.salaryMax];
        }
      );

    this.places = this.filterService.getPlaces();
    this.technologies = this.filterService.getTechs();
    this.levels = this.filterService.getLevels();
  }

  onSelectPlace(newPlace: string) {
    this.filterService.updateFilter('place', newPlace);
    // this.currentPlace =   this.filterService.getFilter('place');
  }

  onSelectTech(newTech: string) {
    this.filterService.updateFilter('tech', newTech);

  }

  onSelectLevel(newLevel: string) {
    this.filterService.updateFilter('level', newLevel);
    // this.currentTech =   this.filterService.getFilter('tech');
  }


  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
