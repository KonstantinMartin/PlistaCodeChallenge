import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, 'de-DE');


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './table-view/table-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { SelectionMenuComponent } from './selection-menu/selection-menu.component';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    EditViewComponent,
    SelectionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AngularDateTimePickerModule,
  ],
  providers: [{ provide: LOCALE_ID,
    useValue: 'de-DE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
