import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSliderModule
} from '@angular/material';
import { OffersComponents } from './components';
import { MatChipsModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAp6cnxztG7VN62TsfvgATQ3YVDfgCN0tw'
    }),
    AppRoutingModule,
    Ng5SliderModule
  ],
  declarations: [
    ...OffersComponents
  ],
  providers: [
  ]
})
export class OffersModule { }
