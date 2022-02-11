import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PeticionsSerivice{
  
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = "https://restcountries.com/v3.1"
    }
    getCountry(pais="spain"):Observable<any>{
        return this._http.get(this.url+"/name/"+pais);
    }
}