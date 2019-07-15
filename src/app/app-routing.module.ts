import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent, UserPanelComponent } from './views/main/components';
import { IsAuthenticatedGuard } from './guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component:  AdminPanelComponent, canActivate: [IsAuthenticatedGuard]},
  { path: 'user', component: UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
