// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>`;

var a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
var a2: Aktie = new Aktie(2, 117.26, 'BAYER', 50.00);
var s1: Schmuck = new Schmuck(3, 99.99, 'Brosche');
var tresor: Tresor = new Tresor();

tresor.addGegenstand(a1);
tresor.addGegenstand(a2);
tresor.addGegenstand(s1);

try {
  console.log(tresor.getGegenstandById_v1(1));
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
try {
  console.log(tresor.getGegenstandById_v1(11)); //Test - existiert nicht
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
try {
  console.log(tresor.getGegenstandById_v2(2));
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
try {
  console.log(tresor.getGegenstandById_v2(22)); //Test - existiert nicht
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
try {
  console.log(tresor.getGegenstandById_v3(3));
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
try {
  console.log(tresor.getGegenstandById_v3(33)); //Test - existiert nicht
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}

console.log(tresor.toString());
console.log("Gesamtwert in Tresor: " + tresor.berechneGesamtwert());

try {
  tresor.removeGegenstand(a2);
  console.log("Folgender Gegenstand gelöscht: \n" + a2.toString);
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}

console.log(tresor.toString());
console.log("Gesamtwert in Tresor: " + tresor.berechneGesamtwert());


try {
  tresor.removeGegenstand(a2); //Test - ist nicht mehr in Tresor
  console.log("Gegenstand a2 gelöscht!");
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}

console.log(tresor.toString());
console.log("Gesamtwert in Tresor: " + tresor.berechneGesamtwert());