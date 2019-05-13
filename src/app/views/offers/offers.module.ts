import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OffersComponents } from './components';
import { OffersServices } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    LeafletModule
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
