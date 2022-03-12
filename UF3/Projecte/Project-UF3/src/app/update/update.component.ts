import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Global } from '../services/global';
import { ProjecteService } from '../services/project.service';
import { UploadService } from '../services/upload.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public title:string;

  public succes_status:string;

  public filesToUpload:any;

  public project_desat:any;

  public projecte:any;

  public url:string;

  public id:any;
  constructor(
    private _projectService:ProjecteService,
    private _uploadService:UploadService, 
    private _route:ActivatedRoute,
    private _router: Router,
    private _projecteService:ProjecteService
  ) { 
    this.title="Modificar Projecte";
    this.url=Global.url;
    this.succes_status="none";
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.id=params['id']
      this._projecteService.getProject(this.id).subscribe(project=>{
        this.projecte=project;
      })
    });
  }
  tanca(){
    this.succes_status="none"
  }
  fileChangeEvent(fileInput: any){
    console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  onSubmit(form:any){
    this._projectService.updateProject(this.projecte,this.id).subscribe(
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
