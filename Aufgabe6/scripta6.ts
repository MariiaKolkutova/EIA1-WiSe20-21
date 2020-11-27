//Emission aller Kontinente 2008 & 2018
namespace aufgabe6{ 

    var africa2008: number = 1028;
    var africa2018: number = 1235.5;
    
    var southAmerica2008: number = 1132.6;
    var southAmerica2018: number = 1261.5;
    
    var europe2008: number = 4965.7;
    var europe2018: number = 4209.3;
    
    var northAmerica2008: number = 6600.4;
    var northAmerica2018: number = 6035.6;
    
    var asia2008: number = 12954.7;
    var asia2018: number = 16274.1;
    
    var australia2008: number = 1993;
    var australia2018: number = 2100.5;

//Gesamtemission aller Kontinente 2018 
var emissionInsgesamt2018: number = (africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018);

//Gesamtemission aller Kontinete 2008
var emissionInsgesamt2008: number = (africa2008 + southAmerica2008 + europe2008 + northAmerica2008 + asia2008 + australia2008);

//Prozentanteil der Gesamtemission aller Kontinente 2018
var prozentanteilAfrica18 : number = ((africa2018 / emissionInsgesamt2018) * 100);
var prozentanteilSouthAmerica18 : number = ((southAmerica2018 / emissionInsgesamt2018) * 100);
var prozentanteilNorthAmerica18 : number = ((northAmerica2018 / emissionInsgesamt2018) * 100);
var prozentanteilEurope18 : number = ((europe2018 / emissionInsgesamt2018) * 100);
var prozentanteilAsia18 : number = ((asia2018 / emissionInsgesamt2018) * 100);
var prozentanteilAustralia18 : number = ((australia2018 / emissionInsgesamt2018) * 100);

//Prozentanteil der Gesamtemission aller Kontinente 2008
var prozentanteilAfrica08 : number = ((africa2008 / emissionInsgesamt2008) * 100);
var prozentanteilSouthAmerica08 : number = ((southAmerica2008 / emissionInsgesamt2008) * 100);
var prozentanteilNorthAmerica08 : number = ((northAmerica2008 / emissionInsgesamt2008) * 100);
var prozentanteilEurope08 : number = ((europe2008 / emissionInsgesamt2008) * 100);
var prozentanteilAsia08 : number = ((asia2008 / emissionInsgesamt2008) * 100);
var prozentanteilAustralia08 : number = ((australia2008 / emissionInsgesamt2008) * 100);

//nicht verwendet?

// Prozentuale veränderung der Gesamtemission aller Kontinente 2008 & 2018
var prozentveraenderungAfrica : number = (((prozentanteilAfrica18 / prozentanteilAfrica08) -1) * 100);
var prozentveraenderungSouthAmerica : number = (((prozentanteilSouthAmerica18 / prozentanteilSouthAmerica08) -1) * 100);
var prozentveraenderungNorthAmerica : number = (((prozentanteilNorthAmerica18 / prozentanteilNorthAmerica08) -1) * 100);
var prozentveraenderungEurope : number = (((prozentanteilEurope18 / prozentanteilEurope08) -1) * 100);
var prozentveraenderungAsia : number = (((prozentanteilAsia18 / prozentanteilAsia08) -1) * 100);
var prozentveraenderungAustralia: number = (((prozentanteilAustralia18 / prozentanteilAustralia08) -1) * 100);

// (Zahlen) Kontinent Vergleich "world carbon dioxide emission" 2008 und 2018 
var ZverglCO2eAfrica : number = (africa2018 - africa2008);
var ZverglCO2eNorthAmerica : number = (northAmerica2018 - northAmerica2008);
var ZverglCO2eSouthAmerica : number = (southAmerica2018 - southAmerica2008);
var ZverglCO2eEurope : number = (europe2018 - europe2008);
var ZverglCO2eAsia : number = (asia2018 - asia2008);
var ZverglCO2eAustralia : number = (australia2018 - australia2008);

// (Prozent) Kontinent Vergleich "world carbon dioxide emission" 2008 und 2018 
var PverglCO2eAfrica : number = (((africa2018 / africa2008) -1) * 100);
var PverglCO2eNorthAmerica : number = (((northAmerica2018 / northAmerica2008) -1) * 100);
var PverglCO2eSouthAmerica : number = (((southAmerica2018 / southAmerica2008) -1) * 100);
var PverglCO2eEurope : number = (((europe2018 / europe2008) -1) * 100);
var PverglCO2eAsia : number = (((asia2018 / asia2008) -1) * 100);
var PverglCO2eAustralia : number = (((australia2018 / australia2008) -1) * 100);

//Funktion
function FunktionKontinentBerechnung(continent: string, continent2018: number, continent2008: number) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#continentX").innerHTML = continent;
    document.querySelector("#emissionAbsolute2018").innerHTML = continent2018.toFixed(2) + "kg CO2";
    document.querySelector("#emissionRelativeWorld").innerHTML = ((europe2018 / emissionInsgesamt2018) / 100 ).toFixed(2) + "%";
    document.querySelector("#growthEmission08and18").innerHTML = (((continent2018 / continent2008 ) -1) * 100).toFixed(2) + "%";
    document.querySelector("#growthEmissionAbsolute").innerHTML = (continent2018 - continent2008 ).toFixed(2) + "kg CO2";
};

//EventListener

//Europe
document.querySelector("#europe").addEventListener("click", function(){
    FunktionKontinentBerechnung("Europe", europe2018, europe2008)
})
 
//Northamerica
document.querySelector("#northamerica").addEventListener("click", function(){
    FunktionKontinentBerechnung("Northamerica", northAmerica2008, northAmerica2008)
})
 

//Southamerica
document.querySelector("#southamerica").addEventListener("click", function(){
    FunktionKontinentBerechnung("Southamerica", southAmerica2008, southAmerica2008)
})
 
//Africa
document.querySelector("#africa").addEventListener("click", function(){
    FunktionKontinentBerechnung("Africa", africa2008, africa2008)
})
//Asia
document.querySelector("#asia").addEventListener("click", function(){
    FunktionKontinentBerechnung("Asia", asia2008, asia2018)
})
//Australia








};