import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasca3';
  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(){
    console.log("correcte")
  }
}
