export class GegenstandNichtGefundenError extends Error {

  constructor(public id: number) {
    let message = "Gegenstand mit der ID " + id + " nicht im Tresor!"
    super(message);
    /**
     * name ist Klassenattribut in Superklasse Error,
     * jedoch nicht Parameter des Konstruktors von Error.
     */
    super.name = "Gegenstand-nicht-gefunden-Error";
  }

}