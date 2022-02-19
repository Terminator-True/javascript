import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PeticionsSerivice{
  
    constructor(
        private _http: HttpClient
    ){
    }
    //Fa una petició a la url "https://restcountries.com/v3.1" on obtenim
    //dades generals sobre un país. Per defecte fa la consulta d'espanya
    getCountry(pais="spain",url="https://restcountries.com/v3.1"):Observable<any>{
        return this._http.get(url+"/name/"+pais);
    }
    //Fa una petició a la url 'https://jsonplaceholder.typicode.com/posts' on obtenim
    // per defecte els posts de l'usuari amb l'id 1 
    getUser(id="1",url="https://jsonplaceholder.typicode.com/posts"):Observable<any>{
        return this._http.get(url+"?userId="+id);
    }
}