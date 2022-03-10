import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Global } from '../services/global';

import { ProjecteService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public url:any;
  public projects:any;
  constructor(
    private _projecteService:ProjecteService
  ) { 
    this.url=Global.url
  }

  ngOnInit(): void {
    this._projecteService.getProjects()
    .subscribe(projects=>{
      this.projects=Object.values(projects)[0]; 
      console.log(this.projects)

    },
    error=>{
      console.log(error)
    })
    
  }

}
