import { Component, OnInit } from '@angular/core';
import { PeticionsSerivice } from '../services/peticio.service';

@Component({
  selector: 'app-formulari-post',
  templateUrl: './formulari-post.component.html',
  styleUrls: ['./formulari-post.component.css']
})
export class FormulariPostComponent implements OnInit {

  public userID:string;
  public _error:string;
  public posts:Array<any>;

  constructor(
    private _peticionsService:PeticionsSerivice
  ) {
    this.userID=""
    this._error=""
    this.posts=[]

  }

  ngOnInit(): void {
  }
  //Utilitza la funció getUser de el servei peticionsService
  //La funció getUser fa una consulta a una url on es retornen posts
  get_user(){
    this._peticionsService.getUser(this.userID).subscribe(
      result=>{
        this._error=""
        console.log(result);
        this.posts=result
      },
      error =>{
          this._error="Id no torbada"
           console.log(<any>error)
          }      
    )
  }

}
