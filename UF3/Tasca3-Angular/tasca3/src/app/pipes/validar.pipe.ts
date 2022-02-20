import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name: 'validar'})
export class descompte implements PipeTransform {
  transform(titol: string, body: string): String {
    return "";
  }
}