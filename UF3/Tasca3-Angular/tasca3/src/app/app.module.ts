import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { CotxesComponent } from './cotxes/cotxes.component';
import { Exemple02Component } from './exemple02/exemple02.component';
import { HomeComponent } from './home/home.component';
import { Modul6 } from './Modul6/Modul6.component';
import { UnitatsFormativesComponent } from './unitats-formatives/unitats-formatives.component';
import { ExternComponent } from './extern/extern.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemple02Component,
    HomeComponent,
    CotxesComponent,
    Modul6,
    UnitatsFormativesComponent,
    ExternComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
