import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import {FormsModule} from "@angular/forms";


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ...AuthComponents,
  ],
  providers: [
    ...AuthServices
  ]
})
export class AuthModule { }
