import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponents } from './components';
import {MatCardModule, MatMenuModule, MatRadioModule} from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    RouterModule,
    MatRadioModule,
    MaterialModule,
    FormsModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    ...SharedComponents,
    FilterComponent
  ],
  declarations: [
    ...SharedComponents,
    FilterComponent,
  ],
  providers: [

  ]
})
export class SharedModule { }
