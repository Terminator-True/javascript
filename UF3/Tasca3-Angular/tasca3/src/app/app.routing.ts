import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Modul6 } from "./Modul6/Modul6.component";
import { CotxesComponent } from "./cotxes/cotxes.component";
import { HomeComponent } from "./home/home.component";
import { Exemple02Component } from "./exemple02/exemple02.component";

const appRoutes: Routes=[
    {path: '',component:HomeComponent},
    {path: 'cotxes',component:CotxesComponent},
    {path: 'modul6',component:Modul6},
    {path: 'exemple2',component:Exemple02Component},
]

export const  appRotingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule>= RouterModule.forRoot(appRoutes);