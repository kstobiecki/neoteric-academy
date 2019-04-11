import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSliderModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';


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
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
