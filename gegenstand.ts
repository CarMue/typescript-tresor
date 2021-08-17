/**
 * Schlüsselwort export notwendig, damit die Klasse auch außerhalb des
 * Moduls verfügbar ist. (Zugriff von außen z. B. über die index.html)
 * 
 * =====================================================================
 * Standardmäßige Sichtbarkeit von Klassen, Eigenschaften und Methoden:
 * Wird keiner der Zugriffsmodifizierer public, private oder protected
 * (nicht für Klassen möglich) angegebenen, ist die Sichtbarkeit
 * grundsätzlich public.
 */
 export abstract class Gegenstand {

    /**
   * Konstruktor, dessen Parameter im Falle einer Deklaration als public
   * (wie hier) oder private zugleich Klassenattribute darstellen. Die 
   * Deklaration als public oder private ist also vonnöten, wenn ein Parameter
   * zugleich ein Klassenattribut darstellen soll.
   * 
   * Sollen die Attribute von außerhalb der Klasse erreichbar sein, bietet sich,
   * anders als z. B. in Java, je nach Fall, eine dieser beiden Optionen an:
   * Attribute, auf die sowohl lesend als auch schreibend zugegriffen werden
   * soll, werden als public deklariert. Attribute, auf die nur lesend
   * zugegriffen werden soll, werden als public readonly deklariert.
   * 
   * Begründung:
   * Muss später ein Refactoring in dem Sinne vorgenommen werden, dass eines 
   * der Attribute doch auf private gesetzt werden muss, aber z. B. ein 
   * schreibender Zugriff aus einer anderen Klasse erhalten bleiben soll,
   * ließe sich ein Setter erzeugen, der genaus so heißt, wie das
   * Klassenattribut hieß, als es noch public war. Der Setter wird nämlich,
   * anders als in Java, einzig über dessen Namen angesprochen - also ohne
   * zusätzlich eine Methodenklammer mit aufzuführen. Das nun private
   * Klassenattribut wäre dann lediglich vorher umzubennen, z. B. 'wert'
   * in '_wert'.
   * 
   * Beispiel
   * 1. Klassenattribut 'wert' von public auf private ändern
   * 2. Umbenennung des Klassenattributs 'wert' in '_wert'
   * 3. ggf. Anlegen von Getter u./o. Setter 'wert'
   * ==>
   *   Konstruktor:
   *      constructor(public readonly id: number, private _wert: number) {}
   *   Getter für '_wert':
   *      get wert() {return this._wert;}
   *   Setter für '_wert':
   *      set wert(wert: number) {this._wert = wert;}
   *   Beispiel für Aufruf des Getters:
   *      let summe: number = 100 + this.wert;
   *   <-- Aufruf erfolgt allein über den Namen und OHNE KLAMMER!
   * 
   * =====================================================================
   * integrierte Datentypen in Typescript:
   * Es gibt nur
   * * any (als Obertyp der folgenden 3 Datentypen:)
   * * number
   * * string
   * * boolean
   * 
   */
  constructor(public readonly id: number, public wert: number) {}

  get toString(): string {
    /**
     * Datentyp der Variablen 'text' muss nicht zwangsläufig festgelegt werden.
     * Er ergibt sich andernfalls auch durch die Zuweisung.
     */
    let text: string = "\nID: " + this.id;
    text += "\nVersicherungswert: " + this.wert;
    return text;
  }
}