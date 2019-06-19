import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from '../../shared/http';
import { CookieService } from 'ngx-cookie-service';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  declarations: [
    ...AuthComponents,
  ],
  providers: [
    ...AuthServices,
    HttpClientService,
    CookieService
  ]
})
export class AuthModule { }
