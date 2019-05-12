import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent } from './views/auth/components';
import { AuthSignupComponent } from './views/auth/components';
import { OffersComponent, OffersListComponent, OfferSingleComponent } from './views/offers/components';
import { OfferResolver } from './views/offers/services/offer-resolver.service';

const routes: Routes = [
  // odkomentować gdy dodasz komponent offers
  // { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  {
    path: AppRoutes.OFFERS, component: OffersComponent,
    children: [
      { path: '', component: OfferSingleComponent }, //TU PRZEKAZAC DATE DO WYSWIETLENIA PUSTEJ STRONY
      { path: AppRoutes.SINGLE_OFFER, component: OfferSingleComponent, resolve: {offer: OfferResolver} }
    ]
  },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
      { path: AppRoutes.LOGIN, component: AuthLoginComponent },
      { path: AppRoutes.SIGNUP, component: AuthSignupComponent }
    ]
  },
  {
    path: AppRoutes.DEFAULT, component: OffersComponent,
    children: [      
      { path: '', component: OffersListComponent },
      // {
      //   path: AppRoutes.PLACE, component: OffersListComponent,
      //   children: [
      //     { path: AppRoutes.TECHNOLOGY, component: OffersListComponent }
      //   ]
      // },
      { path: AppRoutes.PLACE, component: OffersListComponent },
      { path: AppRoutes.PLACE +'/'+AppRoutes.TECHNOLOGY, component: OffersListComponent },
      { path: AppRoutes.PLACE +'/'+ AppRoutes.TECHNOLOGY +'/'+ AppRoutes.LVL, component: OffersListComponent },
      { path: AppRoutes.PLACE +'/'+ AppRoutes.TECHNOLOGY +'/'+ AppRoutes.LVL +'/'+ AppRoutes.SALARYMIN, component: OffersListComponent },
      { path: AppRoutes.PLACE +'/'+ AppRoutes.TECHNOLOGY +'/'+ AppRoutes.LVL +'/'+ AppRoutes.SALARYMIN +'/'+ AppRoutes.SALARYMAX, component: OffersListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
