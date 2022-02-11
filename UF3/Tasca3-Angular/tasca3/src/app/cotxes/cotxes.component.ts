import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { cotxe } from '../models/cotxe';
import { cotxeService } from '../services/cotxe.service';

@Component({
  selector: 'app-cotxes',
  templateUrl: './cotxes.component.html',
  styleUrls: ['./cotxes.component.css'],
  providers: [cotxeService]
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
  model="";
  marca="";
  color="";
  velocitat=0;
  com="";

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _cotxesService:cotxeService
  ) { 
    this.cotxes = [
      new cotxe("RX8","Mazda","Vermell",150,this.combustible.gasolina,true),
      new cotxe("Impreza","Subaru","Blau",130,this.combustible.gasolina,true),
      new cotxe("Tycan","Porsche","Vermell",180,this.combustible.electric,true),
      new cotxe("Civic","Honda","Negre",120,this.combustible.gasoil,false)
    ]

  }

  ngOnInit(): void {
    this.cotxes=this._cotxesService.getCotxes();
    this._route.queryParams.subscribe((params:Params) => {
      this.model = params["model"]
      this.marca = params["marca"]
      this.color = params["color"]
      this.velocitat = params["velocitat"]
      this.com = params["combustible"]
      console.log(params)
      this.AfegirCotxe()
    })
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
