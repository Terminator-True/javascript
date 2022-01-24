import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Modul6 } from './Modul6/Modul6.component';
import { UnitatsFormativesComponent } from './unitats-formatives/unitats-formatives.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { SuccesfulComponentComponent } from './succesful-component/succesful-component.component';


@NgModule({
  declarations: [
    AppComponent,
    Modul6,
    UnitatsFormativesComponent,
    WarningComponentComponent,
    SuccesfulComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
