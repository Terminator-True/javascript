import { Injectable } from "@angular/core";
import { cotxe } from "../models/cotxe";

@Injectable()
export class cotxeService{
    public cotxes: Array <cotxe>;
    public combustible = {
        gasoil:"gasoil",
        electric:"electric",
        hibrid:"hibrid",
        gasolina:"gasolina"
      }
    constructor(){
        this.cotxes=[
            new cotxe("Tycan","Porsche","blau",110,this.combustible.electric,true),
            new cotxe("Civic","Honda","gris",210,this.combustible.gasoil,false)
        ];
    }
    getText():String{
        return '';
    }
    getCotxes():Array<cotxe>{
        return this.cotxes;
    }
}