export class GegenstandNichtGefundenError extends Error {

  constructor(private id: number) {
    super("Gegenstand mit der ID " + id + " nicht im Tresor gefunden!");
    /**
     * name ist Klassenattribut in Superklasse Error,
     * jedoch nicht Parameter des Konstruktors von Error.
     */
    super.name = "Gegenstand-nicht-gefunden-Error";
  }

}