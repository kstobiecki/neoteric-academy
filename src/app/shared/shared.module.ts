import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { SharedComponents } from './components';
import { SharedServices } from './services';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule
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
