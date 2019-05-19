import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent } from './views/auth/components';
import { AuthSignupComponent } from './views/auth/components/auth-signup/auth-signup.component' ;
import { OffersComponent } from './views/offers/components/offers/offers.component';
import { OfferDetailComponent, OffersListComponent } from './views/offers/components';
import { BrandsComponent } from './views/brands/components/brands/brands.component';

const routes: Routes = [
  { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  { path: AppRoutes.DEFAULT, component: OffersComponent, children: [
      { path: '', component: OffersListComponent },
      { path: ':id', component: OfferDetailComponent }
    ]},
  { path: AppRoutes.BRANDS, component: BrandsComponent },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: AppRoutes.LOGIN, component: AuthLoginComponent },
      { path: AppRoutes.SIGNUP, component: AuthSignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
