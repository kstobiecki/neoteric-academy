import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import { AuthLoginComponent } from './views/auth/components';
import { AuthSignupComponent } from './views/auth/components';
import { OffersComponent } from './views/offers/components';

const routes: Routes = [
  // odkomentować gdy dodasz komponent offers
  { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  { path: AppRoutes.DEFAULT, component: OffersComponent },
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
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
