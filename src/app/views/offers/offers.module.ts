import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersComponents } from './components';
import { OffersServices } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    ...OffersComponents
  ],
  declarations: [
    ...OffersComponents
  ],
  providers: [
    ...OffersServices
  ]
})
export class OffersModule { }
