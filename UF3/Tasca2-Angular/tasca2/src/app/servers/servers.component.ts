import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  user= "No user"
  username="User";
  notNull=false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onCreateUser() {
    this.user = this.username;
    this.notNull= this.username!="" ? true:false
  }

  adduser(){
    this.user="";
    this.username="";
  }

  onUpdateServerName(event: Event) {

    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  onUpdateUserName(event: Event) {
    //console.log(event);
    this.username = (<HTMLInputElement>event.target).value;
  }

}
