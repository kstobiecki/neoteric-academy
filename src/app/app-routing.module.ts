import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent } from './views/auth/components';
import { AuthSignupComponent } from './views/auth/components';
import { OffersComponent, OffersListComponent, OfferSingleComponent } from './views/offers/components';

const routes: Routes = [
  // odkomentować gdy dodasz komponent offers
  // { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  {
    path: AppRoutes.OFFERS, component: OffersComponent,
    children: [
      { path: '', component: OfferSingleComponent },
      { path: AppRoutes.SINGLE_OFFER, component: OfferSingleComponent }
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
