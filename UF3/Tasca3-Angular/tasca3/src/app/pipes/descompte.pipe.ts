import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name: 'descompte'})
export class descompte implements PipeTransform {
  transform(value: number, percentage: number): String {
    return "Preu original "+value+"€ - Preu Rebaixat "+percentage+"% ="+(value-(value*percentage/100));
  }
}