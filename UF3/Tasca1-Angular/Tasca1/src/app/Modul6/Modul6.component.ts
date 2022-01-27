import { Component } from "@angular/core";

@Component({
    selector: '.Modul6',
    templateUrl:`./modul6.component.html`
})
export class Modul6{
    public subtitol: string;

    constructor(){
        this.subtitol="Versio 13";
        console.log("Funciona");
    }
}