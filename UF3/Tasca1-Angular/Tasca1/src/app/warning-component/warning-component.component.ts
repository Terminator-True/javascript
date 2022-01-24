import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning-component.component.html',
  styleUrls: ['./warning-component.component.css']
})
export class WarningComponentComponent implements OnInit {
  public action: string;
  public message: string;

  constructor() { 
    this.action="Danger!";
    this.message="Indicates a dangerous or potentially negative action.";
  }

  ngOnInit(): void {
  }

}
