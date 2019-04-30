import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersComponents } from './components';
import { OffersServices } from './services';

@NgModule({
  imports: [
    RouterModule
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
