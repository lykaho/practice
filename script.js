/*
//Dies ist ein Kommentar
//////////////////////
//Die ist ein auffälliger Kommentar
//////////////////////
/*Dies ist ein
mehrzeiliger
Kommentar
*/
/*
var name = prompt("Wie ist ihr Name?");
alert("Hello " + name);
var message = "Hello ";
var msg ="Hello";
alert(message + name);
alert(msg + name);
//Das Leerzeichen nach dem Hello ist wichtig, da es sonst fehlt.

var score = 10;
score = score + 10;
score += 10
//auch mit -=, *= & /=. Das Resultat ist das gleiche wie oben.
alert(score)
var a = 3;
a = a + 1;
a += 1;
a++;
alert(a)
//das Gleiche gilt für --

var c = 2;
if (c == 2) {
  alert("Es ist wahr!");
}
//Der Wert von c wird geprüft -> also ob c=99
//if (Bedingung){wird nur ausgeführt wenn wahr}
if (d != 100) {
  alert("d ist nicht gleich 100");
}
//!= prüft, die Ungleichheit zweier Elemente
var konto = 500;
if (konto >= 0) {
  alert("Ihr Konto ist positiv.");
} else {
  alert("Ihr Konto ist negativ");
}
//um hinzuzufügen "wenn nicht", fügt man else hintenan.

var a = 3;
var b = 3;
var c = 5;
var d = 2;
if (a === b && c===d) {
  alert("a & b und c d sind jeweils gleich.");
}
if (a===b || c===d) {
  alert("a und b und/oder c und d sind gleich.");
} else {
  alert("a & b und c & d sind ungleich")
}

//var farbe = prompt("Welche Farbe möchten Sie wählen?");
var farbe = "rot";
switch (farbe) {
  case "rot":
    alert("Der Preis ist 4 Euro.");
    break;
  case "gelb":
    alert("Der Preis ist 5 Euro.");
    break;
  case "blau":
    alert("Der Preis ist 6 Euro.");
    break;
  default:
    alert("Die Farbe gibt es nicht.")
}
//default wird für alle weiteren Optionen gesetzt.
//wenn nicht break dort stehen würde, würden alle weiteren Optionen
//ebefalls ausgegeben werden.

function meineFkt() {
  var a = 10;
  var b = 15;
  var c = 20;
  var d = a + b + c;
  alert("Das Ergebnis ist " + d)
}
//wann immer jetzt meineFkt aufgeschrieben wird, wird diese abgespielt.
meineFkt();
//erst dadurch findet die Aussage statt.

function addiere(a,b) {
  var erg = a + b;
  alert(erg);
}
addiere (10,15);
//jetzt werden 10 & 15 für a & b eingesetzt. Das Ergebnis wird ausgegeben.

function addi(a,b) {
  var erg = a+b;
  return erg;
  alert("Hallo")
}
var ergebnis = addi(10,25);
alert(ergebnis);
//return beendet die Ausgabe. Dadurch wird "Hallo" nicht mehr ausgeführt.
//trotzdem wird das Ergebnis genannt, wenn gefragt.
*/
