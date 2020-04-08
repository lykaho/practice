/*
//Reguläre Ausdrücke
var myRE = /hallo/; 
//od var myRE = newRegExp("hallo")
var myString = "hallo beinhaltet diese Zeichenkette das Wort hallo";
if (myRE.test(myString)) {
   alert("Ja!");
*/
/*
weitere Beispiele:
/^hallo/; -> ^ am Anfang
/hallo$/; -> $ am Ende
/hal+o/; ->  + ein- oder mehrmals (halo, hallo, hallllllo)
/hal*o/; -> * nicht oder mehmals (hao, halo, hallo, hallllllo)
/hal?o/; -> ? null oder einmal (hao, halo)
/hallo|goodbye/; -> entweder|oder
/a..o/; ...jedes Zeichen
/\wallo/; \w Aphanumerisch oder _ (Unterstrich)
/\bhallo/; \b Wortgrenze
/[brsl]all/; [...] Sammlung an Zeichen (ball, rall, sall, lall)
Es gibt auch komplizierte Muster. Bei diesen macht es Sinn sie vorher im Internet zu googlen. Z.B.
/^[0-9]{5}(?:-[0-9]{4})?$/ -> PLZ DE od AT
*/
var headline = document.getElementById("mainHeading");
headline.innerHTML = "Ha, das ist eine andere Überschrift!!";
//Oben wird die Überschrift des HTML Dokuments manipuliert. 
//Mithilfe von .js lässt sich soweit alles im HTML Dokument manipulieren.
headline.onclick = function(){
    headline.innerHTML = "Sie haben geklickt.";
};
//onclick: eine function wird erst ausgeführt, wenn auf das Element geklickt wird. 
