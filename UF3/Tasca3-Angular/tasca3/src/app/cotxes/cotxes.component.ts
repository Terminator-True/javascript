import { Component, OnInit } from '@angular/core';
import { cotxe } from '../models/cotxe';


@Component({
  selector: 'app-cotxes',
  templateUrl: './cotxes.component.html',
  styleUrls: ['./cotxes.component.css']
})
export class CotxesComponent implements OnInit {

  public text: string = "Cotxes";
  public cotxes:Array<cotxe>;
  public combustible = {
    gasoil:"gasoil",
    electric:"electric",
    hibrid:"hibrid",
    gasolina:"gasolina"
  }
  public model:string="";
  public marca:string="";
  public color:string="";
  public velocitat:number=0;
  public com:string="";

  constructor() { 
    this.cotxes = [
      new cotxe("RX8","Mazda","Vermell",150,this.combustible.gasolina,true),
      new cotxe("Impreza","Subaru","Blau",130,this.combustible.gasolina,true),
      new cotxe("Tycan","Porsche","Vermell",180,this.combustible.electric,true),
      new cotxe("Civic","Honda","Negre",120,this.combustible.gasoil,false)
    ]
  }

  ngOnInit(): void {
    console.log(this.cotxes)
  }
  AfegirCotxe(){
    this.cotxes.push(new cotxe(this.model,this.marca,this.color,this.velocitat,this.com,this.velocitat>150 ? true:false));
  }
  EliminaCotxe(marca_e:string){
    for (let i = 0; i < this.cotxes.length; i++) {
      if (this.cotxes[i].model==marca_e) {
        this.cotxes.splice(i,1)
        
      }
    }
  }
}
