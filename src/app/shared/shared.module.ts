import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import { MatCardModule, MatChipsModule, MatMenuModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    RouterModule,
    MatRadioModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  exports: [
    ...SharedComponents,
    FilterComponent,
    SidenavComponent
  ],
  declarations: [
    ...SharedComponents,
    FilterComponent,
    SidenavComponent,
  ],
  providers: [

  ]
})
export class SharedModule { }
