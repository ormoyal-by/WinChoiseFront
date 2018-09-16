import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreditComponent } from './credit/credit.component';
import { BiladiComponent } from './biladi/biladi.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BirthpackagesComponent } from './birthpackages/birthpackages.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreditComponent,
    BiladiComponent,
    ProductdetailsComponent,
    BirthpackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
