import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public titol: string;
  public subtitol: string;
  public email: string;

  constructor(){
      this.titol="Projecte M6";
      this.subtitol="UF3-M6 Desenvolupament amb angular";
      this.email="jf28renault@gmail.com";

  }
  ngOnInit(): void {
  }

}
