import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material';


// in this module we import every angular material module
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    CommonModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
