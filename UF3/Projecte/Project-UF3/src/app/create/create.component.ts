import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Global } from '../services/global';
import { ProjecteService } from '../services/project.service';
import { UploadService } from '../services/upload.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjecteService]
})
export class CreateComponent implements OnInit {
  
  public title:string;

  public projecte:Project;
  
  public succes_status:string;

  public filesToUpload:any;

  public project_desat:any;

  constructor(
    private _projectService:ProjecteService,
    private _uploadService:UploadService
  ) {
    this.projecte=new Project("","","","",2022,"","");

    this.title="Crear Projecte";

    this.succes_status="none";
   }

  ngOnInit(): void {
  }

  tanca(){
    this.succes_status="none"
  }
  fileChangeEvent(fileInput: any){
    console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  onSubmit(form:any) {
    this._projectService.saveProject(this.projecte).subscribe(
        result=>{
          this.project_desat=result;
          if ( this.project_desat.project._id !="") {
            this._uploadService.makeFileRequest(
              Global.url+'/upload-image/'+this.project_desat.project._id,
              [],
              this.filesToUpload,
              'image'
            ).then((res:any) => {
              console.log(res)
            })
          }

          form.reset()
          //console.log(result)
          this.succes_status=""
      }, error =>{console.log(error)})
      
    }
  
}
