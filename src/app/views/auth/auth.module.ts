import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [
    ...AuthComponents,
  ],
  providers: [
    ...AuthServices
  ]
})
export class AuthModule { }
