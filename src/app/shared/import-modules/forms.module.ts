import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';


import { MatSelectModule } from '@angular/material/select';
//video 32 parte 1 
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    IconModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ]
})
export class FormsModule { }
