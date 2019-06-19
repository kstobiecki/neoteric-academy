import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MatCardModule, MatChipsModule, MatMenuModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './http';
import { CookieService } from 'ngx-cookie-service';
import { Ng5SliderModule } from 'ng5-slider';
import { OffersListComponent } from '../views/offers/components';

@NgModule({
  imports: [
    RouterModule,
    MatRadioModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  exports: [
    ...SharedComponents,
  ],
  declarations: [
    ...SharedComponents,
  ],
  providers: [
    HttpClientService,
    CookieService,
  ]
})
export class SharedModule { }
