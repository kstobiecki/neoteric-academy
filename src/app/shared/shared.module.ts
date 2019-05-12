import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { SharedComponents } from './components';
import { SharedServices } from './services';
import { BrowserModule } from '@angular/platform-browser';

import { NouisliderModule } from 'ng2-nouislider';

import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule,
    NouisliderModule,
    FormsModule    
  ],
  exports: [
    ...SharedComponents
  ],
  declarations: [
    ...SharedComponents
  ],
  providers: [
    ...SharedServices
  ]
})
export class SharedModule { }
