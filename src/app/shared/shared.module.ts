import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout'

import { SharedComponents } from './components';
import { SharedServices } from './services';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule,
    NouisliderModule,
    FlexLayoutModule
    
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
