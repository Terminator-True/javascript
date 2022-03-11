import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Project } from '../models/project';
import { ProjecteService } from '../services/project.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public id:string;
  public project:any;
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _projecteService:ProjecteService

  ) { this.id="" }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.id=params['id']
      this._projecteService.getProject(this.id).subscribe(project=>{
        this.project=project;
      })
      
    });
  }

}
