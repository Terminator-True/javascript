import { Component, OnInit } from '@angular/core';
import { cotxe } from '../models/cotxe';


@Component({
  selector: 'app-cotxes',
  templateUrl: './cotxes.component.html',
  styleUrls: ['./cotxes.component.css']
})
export class CotxesComponent implements OnInit {

  public text: string = "Cotxes"
  public cotxes:Array<cotxe>;
  public combustible = {
    gasoil:"gasoil",
    electric:"electric",
    hibrid:"hibrid",
    gasolina:"gasolina"
  }
  constructor() { 
    this.cotxes = [
      new cotxe("RX8","Mazda","Vermell",150,this.combustible.gasolina),
      new cotxe("Impreza","Subaru","Blau",130,this.combustible.gasolina),
      new cotxe("Tycan","Porsche","Vermell",180,this.combustible.electric),
      new cotxe("Civic","Honda","Negre",120,this.combustible.gasoil)
    ]
  }

  ngOnInit(): void {
    console.log(this.cotxes)
  }

}
