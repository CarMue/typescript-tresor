import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Aktie extends Gegenstand {

  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) {
    super(id, wert);
  }

  get toString(): string {
    let text: string = "\nAKTIE: "; 
    text += super.toString;
    text += "\nUnternehmen: " + this.unternehmen;
    text += "\nNennwert: " + this.nennwert;
    return text;
  }
  
}