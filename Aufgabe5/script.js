//Emission aller Kontinente 2008 & 2018
console.log("Worldwide Emission");
var africa2008 = 1028;
var africa2018 = 1235.5;
var southAmerica2008 = 1132.6;
var southAmerica2018 = 1261.5;
var europe2008 = 4965.7;
var europe2018 = 4209.3;
var northAmerica2008 = 6600.4;
var northAmerica2018 = 6035.6;
var asia2008 = 12954.7;
var asia2018 = 16274.1;
var australia2008 = 1993;
var australia2018 = 2100.5;
//Gesamtemission aller Kontinente 2018 
var emissionInsgesamt2018 = (africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018);
//Gesamtemission aller Kontinete 2008
var emissionInsgesamt2008 = (africa2008 + southAmerica2008 + europe2008 + northAmerica2008 + asia2008 + australia2008);
//Prozentanteil der Gesamtemission aller Kontinente 2018
var prozentanteilAfrica18 = ((africa2018 / emissionInsgesamt2018) * 100);
var prozentanteilSouthAmerica18 = ((southAmerica2018 / emissionInsgesamt2018) * 100);
var prozentanteilNorthAmerica18 = ((northAmerica2018 / emissionInsgesamt2018) * 100);
var prozentanteilEurope18 = ((europe2018 / emissionInsgesamt2018) * 100);
var prozentanteilAsia18 = ((asia2018 / emissionInsgesamt2018) * 100);
var prozentanteilAustralia18 = ((australia2018 / emissionInsgesamt2018) * 100);
//Prozentanteil der Gesamtemission aller Kontinente 2008
var prozentanteilAfrica08 = ((africa2008 / emissionInsgesamt2008) * 100);
var prozentanteilSouthAmerica08 = ((southAmerica2008 / emissionInsgesamt2008) * 100);
var prozentanteilNorthAmerica08 = ((northAmerica2008 / emissionInsgesamt2008) * 100);
var prozentanteilEurope08 = ((europe2008 / emissionInsgesamt2008) * 100);
var prozentanteilAsia08 = ((asia2008 / emissionInsgesamt2008) * 100);
var prozentanteilAustralia08 = ((australia2008 / emissionInsgesamt2008) * 100);
// Prozentuale veränderung der Gesamtemission aller Kontinente 2008 & 2018
var prozentveraenderungAfrica = (((prozentanteilAfrica18 / prozentanteilAfrica08) - 1) * 100);
var prozentveraenderungSouthAmerica = (((prozentanteilSouthAmerica18 / prozentanteilSouthAmerica08) - 1) * 100);
var prozentveraenderungNorthAmerica = (((prozentanteilNorthAmerica18 / prozentanteilNorthAmerica08) - 1) * 100);
var prozentveraenderungEurope = (((prozentanteilEurope18 / prozentanteilEurope08) - 1) * 100);
var prozentveraenderungAsia = (((prozentanteilAsia18 / prozentanteilAsia08) - 1) * 100);
var prozentveraenderungAustralia = (((prozentanteilAustralia18 / prozentanteilAustralia08) - 1) * 100);
// (Zahlen) Vergleich "world carbon dioxide emission" 2008 und 2018 
var verglCO2eAfrica = (africa2018 - africa2008);
var verglCO2eNorthAmerica = (northAmerica2018 - northAmerica2008);
var verglCO2eSouthAmerica = (southAmerica2018 - southAmerica2008);
var verglCO2eEurope = (europe2018 - europe2008);
var verglCO2eAsia = (asia2018 - asia2008);
var verglCO2eAustralia = (australia2018 - australia2008);
// (Prozent) Vergleich "world carbon dioxide emission" 2008 und 2018 
var verglCO2eAfrica = (((africa2018 - africa2008) - 1) * 100);
var verglCO2eNorthAmerica = (((northAmerica2018 - northAmerica2008) - 1) * 100);
var verglCO2eSouthAmerica = (((southAmerica2018 - southAmerica2008) - 1) * 100);
var verglCO2eEurope = (((europe2018 - europe2008) - 1) * 100);
var verglCO2eAsia = (((asia2018 - asia2008) - 1) * 100);
var verglCO2eAustralia = (((australia2018 - australia2008) - 1) * 100);
//Konsolenausgabe
//Europe
console.log("Die Emission von Europa ist: kg CO2");
console.log("Die Emission von Europa, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Europa, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit XX%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//Asia
console.log("Die Emission von Asien ist: kg CO2");
console.log("Die Emission von Asien, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Asien, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit XX%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//Australia
console.log("Die Emission von Australien ist: kg CO2");
console.log("Die Emission von Australien, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Aistralien, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Aistralien damit XX%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//Africa
console.log("Die Emission von Afrika ist: kg CO2");
console.log("Die Emission von Afrika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Afrika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit XX%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//SouthAmerica
console.log("Die Emission von Südamerika ist: kg CO2");
console.log("Die Emission von Südamerika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Südamerika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit XX%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//NorthAmerica
console.log("Die Emission von Nordamerika ist: kg CO2");
console.log("Die Emission von Nordamerika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt xx%");
console.log("Die Emission von Nordamerika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt xx%");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit XX%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert");
console.log("2018 im Vergleich zu 2008 sind das XXXX kg CO2");
//# sourceMappingURL=script.js.map