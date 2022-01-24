import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succesful',
  templateUrl: './succesful-component.component.html',
  styleUrls: ['./succesful-component.component.css']
})
export class SuccesfulComponentComponent implements OnInit {
  public action: string;
  public message: string;

  constructor() { 
    this.action="Success!";
    this.message="Indicates a successful or positive action.";
  }
  ngOnInit(): void {
  }

}
