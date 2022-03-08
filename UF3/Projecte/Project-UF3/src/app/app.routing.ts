import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
 
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CreateComponent } from "./create/create.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";

const appRoutes: Routes = [
   {path: '', component: AboutComponent},
   {path: 'about', component: AboutComponent},
   {path: 'projects', component: ProjectsComponent},
   {path: 'create-project', component: CreateComponent},
   {path: 'contact', component: ContactComponent},
   {path: '**', component: ErrorComponent}
]
 
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);