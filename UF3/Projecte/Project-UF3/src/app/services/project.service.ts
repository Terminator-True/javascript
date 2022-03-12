import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Global } from "./global";

import { Project } from "../models/project";


@Injectable({
    providedIn:'root'
})

export class ProjecteService{
    public url:string;
    constructor(
        private _http: HttpClient

    ){
        this.url = Global.url
    }

    saveProject(project: Project){
    
        let params = JSON.stringify(project)
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(params)
        return this._http.post(this.url+'/save-project', params, {headers: headers})
    }
    
    getProjects(){
        return this._http.get(this.url+"/projects/");
    }
    getProject(id:string){
        return this._http.get(this.url+"/project/"+id)
    }
    deleteProject(id:string){
        return this._http.delete(this.url+"/delete-project/"+id)
    }
    updateProject(project: Project, id:string){
        let params = JSON.stringify(project)
        let headers = new HttpHeaders().set('Content-Type','application/json')
        console.log(params)
        return this._http.put(this.url+'/update-project/'+id, params, {headers: headers})
    }
}   