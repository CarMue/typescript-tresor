import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";

export class Tresor {
  
  private gegenstaende: Gegenstand[]

  constructor() {
    this.gegenstaende = new Array;
  }

  addGegenstand(gegenstand: Gegenstand) {
    this.gegenstaende.push(gegenstand);
  }

  /**
   * Nachfolgend drei verschiedene Varianten des Durchsuchens des Arrays:
   * 1. forEach-Schleife --> in typescript 'for ... of'
   *    --> vgl. 'getGegenstandById_v1'
   * 2. for-Schleife mit Iteration
   *    --> vgl. 'getGegenstandById_v2'
   * 3. Methode find()
   *    --> vgl. 'getGegenstandById_v3'
   */

  getGegenstandById_v1(id: number): Gegenstand {
    for (let gegenstand of this.gegenstaende) {
      if (gegenstand.id === id) {
        return gegenstand;
      } 
    }
    throw new GegenstandNichtGefundenError("Gegenstand mit der ID " + id + " nicht im Tresor!");
  }

  getGegenstandById_v2(id: number): Gegenstand {
    for (let i: number = 0; i < this.gegenstaende.length; i++) {
      if (this.gegenstaende[i].id === id) {
        return this.gegenstaende[i];
      } 
    }
    throw new GegenstandNichtGefundenError("Gegenstand mit der ID " + id + " nicht im Tresor!");
  }

  getGegenstandById_v3(id: number): Gegenstand {
    let gefundenerGegenstand: Gegenstand = this.gegenstaende.find(gegenstand => gegenstand.id === id);
    /**
     * Die Methode find() liefert den ersten Treffer zurück.
     * Gibt es letztlich überhaupt keinen Treffer, wird 'undefined' zurückgegeben.
     */
    if (gefundenerGegenstand === undefined) {
      throw new GegenstandNichtGefundenError("Gegenstand mit der ID " + id + " nicht im Tresor!");
    }
    return gefundenerGegenstand;
  }

  removeGegenstand(gegenstandToRemove: Gegenstand) {
    let gefundenerGegenstand: Gegenstand = this.gegenstaende.find(gegenstand => gegenstand === gegenstandToRemove);
    /**
     * Die Methode find() liefert den ersten Treffer zurück.
     * Gibt es letztlich überhaupt keinen Treffer, wird 'undefined' zurückgegeben.
     */
    if (gefundenerGegenstand === undefined) {
      throw new GegenstandNichtGefundenError("Folgender zu löschender Gegenstand nicht mehr im Tresor:\n" + gegenstandToRemove.toString);
     }
    /**
     * Das Array wird neu aufgebaut:
     * 1. Es werden mithilfe der Methode filter() alle Elemente herausgefilter,
     *    die nicht dem Element 'gegenstandToRemove' entsprechen.
     * 2. Das Ergebnis des Filterns überschreibt das Array 'gegenstaende'.
     */
    this.gegenstaende = this.gegenstaende.filter(gegenstand => gegenstand !== gegenstandToRemove);
  }

  berechneGesamtwert(): number {
    let summeWerte: number = 0;
    this.gegenstaende.forEach(gegenstand => summeWerte += gegenstand.wert);
    return summeWerte;
  }

  toString(): string {
    let text: string = "LISTE DER GEGENSTÄNDE"
    this.gegenstaende.forEach(gegenstand => text += gegenstand.toString);
    return text;
  }

}