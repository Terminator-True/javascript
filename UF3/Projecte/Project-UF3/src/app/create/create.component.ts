import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjecteService } from '../services/project.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjecteService]
})
export class CreateComponent implements OnInit {
  
  public title:string;
  public project:Project;
  public error:string;
  public estado:string;

  public titol:string;
  public descripcio:string;
  public categoria:string;
  public any:number;
  public llenguatges:string;

  public omplert:boolean;
  constructor(
    private _projectService:ProjecteService
  ) {
    this.estado="hidden";
    this.error="";
    this.omplert=false;
    this.titol="";
    this.descripcio="";
    this.categoria="";
    this.any=0;
    this.llenguatges="";
    this.title="Crear Projecte";
    this.project = new Project("","","","",2022,"","");
   }

  ngOnInit(): void {
  }

  tanca(){
    this.estado="hidden";
  }
  onSubmit() {
    this.omplert= this.titol!="" && this.descripcio!="" && this.categoria!="" && this.any!=0 && this.any==null && this.llenguatges!="" ? true:false
    if (!this.omplert) {
      this.estado="visible";
      this.error='Fa falta omplir tots els camps'
    }else{
      this.estado="hidden";
      this.error="";
    }
  }
}
