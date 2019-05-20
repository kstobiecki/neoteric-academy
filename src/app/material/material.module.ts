import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule, MatSelectModule } from '@angular/material';



// in this module we import every angular material module
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,    
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
