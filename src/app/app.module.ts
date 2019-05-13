import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreGuards } from './guards';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './views/auth/auth.module';
import { OffersModule } from './views/offers/offers.module';
import { OfferResolver } from './views/offers/services/offer-resolver.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    OffersModule,
    AuthModule,
    LeafletModule
  ],
  providers: [
    CoreGuards,
    OfferResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
