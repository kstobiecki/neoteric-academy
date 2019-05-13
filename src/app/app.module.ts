import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreGuards } from './guards';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './views/auth/auth.module';
import { OffersModule } from './views/offers/offers.module';
import { OfferService } from './views/offers/services/offer.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    OffersModule,
    HttpClientModule,
  ],
  providers: [
    CoreGuards,
    OfferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
