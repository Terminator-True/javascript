import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";


@Injectable()

export class ProjecteService{
    public url:string;
    constructor(
        private _http: HttpClient,

    ){
        this.url = Global.url
    }

    testService(){
        return "Provant servei"
    }
}