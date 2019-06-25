import { MainComponents } from './components';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ...MainComponents
  ],
  exports: [
    ...MainComponents
  ]
})
export class MainModule { }
