import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSliderModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { Ng5SliderModule } from 'ng5-slider';


// in this module we import every angular material module
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    Ng5SliderModule,
    ScrollDispatchModule
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    ScrollDispatchModule
  ]
})
export class MaterialModule { }
