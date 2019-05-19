import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrandsComponents } from './components';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    ...BrandsComponents,
  ],
})

export class BrandsModule { }
