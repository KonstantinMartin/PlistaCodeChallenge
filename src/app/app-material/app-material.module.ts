import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatRadioModule,
  MatNativeDateModule,
  MatOptionModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioGroup,
  MatDatepickerModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    MatTableModule,
    MatDatepickerModule,
    MatRadioGroup,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
  ]
})
export class AppMaterialModule { }
