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
  constructor() { 
    this.cotxes = [
      new cotxe("RX8","Mazda","Vermell",150),
      new cotxe("Impreza","Subaru","Blau",130),
      new cotxe("Lancer","Mitsubishi","Vermell",180),
      new cotxe("Civic","Honda","Negre",120)
    ]
  }

  ngOnInit(): void {
    console.log(this.cotxes)
  }

}
