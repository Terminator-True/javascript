import { Component, OnInit } from '@angular/core';
import { PeticionsSerivice } from '../services/peticio.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-formulari-post',
  templateUrl: './formulari-post.component.html',
  styleUrls: ['./formulari-post.component.css']
})
export class FormulariPostComponent implements OnInit {

  //Exercici3
  public userID:string;
  public _error:string;
  public posts:Array<any>;
  //Exercici4
  public titol:string;
  public body:string;
  public post:Post;

  constructor(
    private _peticionsService:PeticionsSerivice
  ) {
    //Exercici3
    this.userID=""
    this._error=""
    this.posts=[]

    //Exercici4
    this.titol=""
    this.body=""
    this.post =  new Post("","","","")
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
  onSubmit() {
    console.log(this.post)
  }

}
