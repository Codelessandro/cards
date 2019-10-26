import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    MatSlideToggleModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
