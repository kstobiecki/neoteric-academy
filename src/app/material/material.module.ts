import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSliderModule,
  MatCheckboxModule
} from '@angular/material';


// in this module we import every angular material module
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
