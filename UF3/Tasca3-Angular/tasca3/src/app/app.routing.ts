import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
 
import { Modul6 } from './Modul6/Modul6.component'
import { Exemple02Component } from "./exemple02/exemple02.component";
import { CotxesComponent } from "./cotxes/cotxes.component";
import { UnitatsFormativesComponent } from "./unitats-formatives/unitats-formatives.component";
import { HomeComponent } from "./home/home.component";
//import { ExternComponent } from "./extern/extern.component";
 
const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'modul6', component: Modul6},
   {path: 'exemple02', component: Exemple02Component},
   {path: 'cotxe', component: CotxesComponent},
   {path: 'cotxe/:model/:marca/:color/:velocitat/:combustible', component: CotxesComponent},
   {path: 'unitats-formatives', component: UnitatsFormativesComponent},
   //{path: 'extern', component: ExternComponent },
   {path: '**', component: HomeComponent}
]
 
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);