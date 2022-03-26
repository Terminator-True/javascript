import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Project } from '../models/project';
import { ProjecteService } from '../services/project.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public project:any;
  public url:string;
  public id:any;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _projecteService:ProjecteService

  ) { this.url=Global.url }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.id=params['id']
      this._projecteService.getProject(this.id).subscribe(project=>{
        this.project=project;
      })
    });
  }
  delete(){
    console.log(this.id)
    this._projecteService.deleteProject(this.id).subscribe(ok=>{
      if (ok) {
        this._router.navigate(['/projects'])
      }
    })
  }
}
