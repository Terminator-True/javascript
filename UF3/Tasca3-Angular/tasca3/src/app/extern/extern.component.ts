import { Component, OnInit } from '@angular/core';
import { PeticionsSerivice } from '../services/peticio.service';
@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css']
})
export class ExternComponent implements OnInit {
  public dades:Array<any>;
  public country:string;
  public _error:string;
  constructor(
    private _peticionsService:PeticionsSerivice
  ) {
    this.dades=[]
    this.country=""
    this._error=""
   }

  public Get_Country() {
    this._peticionsService.getCountry(this.country).subscribe(
      result => {
        this._error=""
        console.log(result);
        this.dades = [
          result[0].capital,
          result[0].subregion,
          result[0].flags.svg,
          result[0].languages[Object.keys(result[0].languages).join("")]
        ]
        console.log(this.dades)
      },
      error =>{
       this._error="País no existent"
        console.log(<any>error)
      }
    )
  }
  ngOnInit(): void {
    this.Get_Country()
  }

}
