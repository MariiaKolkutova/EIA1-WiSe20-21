console.log("-Worldwide Emission-");
//Emission aller Kontinente 2008 & 2018
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
// (Zahlen) Kontinent Vergleich "world carbon dioxide emission" 2008 und 2018 
var ZverglCO2eAfrica = (africa2018 - africa2008);
var ZverglCO2eNorthAmerica = (northAmerica2018 - northAmerica2008);
var ZverglCO2eSouthAmerica = (southAmerica2018 - southAmerica2008);
var ZverglCO2eEurope = (europe2018 - europe2008);
var ZverglCO2eAsia = (asia2018 - asia2008);
var ZverglCO2eAustralia = (australia2018 - australia2008);
// (Prozent) Kontinent Vergleich "world carbon dioxide emission" 2008 und 2018 
var PverglCO2eAfrica = (((africa2018 / africa2008) - 1) * 100);
var PverglCO2eNorthAmerica = (((northAmerica2018 / northAmerica2008) - 1) * 100);
var PverglCO2eSouthAmerica = (((southAmerica2018 / southAmerica2008) - 1) * 100);
var PverglCO2eEurope = (((europe2018 / europe2008) - 1) * 100);
var PverglCO2eAsia = (((asia2018 / asia2008) - 1) * 100);
var PverglCO2eAustralia = (((australia2018 / australia2008) - 1) * 100);
//Konsolenausgabe
//Europe
console.log("-Europa-");
console.log("Die Emission von Europa im Jahr 2018 ist: " + europe2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Europa im Jahr 2008 ist: " + europe2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Europa 2008 + 2018 ist insgesamt: " + europe2008.toFixed(2) + europe2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Europa, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilEurope18.toFixed(2) + "%");
console.log("Die Emission von Europa, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilEurope08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit 2008: " + prozentanteilEurope08.toFixed(2) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eEurope.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eEurope.toFixed(2) + "kg CO2");
//Asia
console.log("-Asien-");
console.log("Die Emission von Asien im Jahr 2018 ist: " + asia2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Asien im Jahr 2008 ist: " + asia2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Asien 2008 + 2018 ist insgesamt: " + asia2008.toFixed(2) + asia2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Asien, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilAsia18.toFixed(2) + "%");
console.log("Die Emission von Asien, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilAsia08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit 2008: " + prozentanteilAsia08.toFixed(2) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eAsia.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eAsia.toFixed(2) + "kg CO2");
//Australia
console.log("-Australien-");
console.log("Die Emission von Australien im Jahr 2018 ist: " + australia2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Australien im Jahr 2008 ist: " + australia2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Australien 2008 + 2018 ist insgesamt: " + australia2008.toFixed(2) + australia2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Australien, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilAustralia18.toFixed(2) + "%");
console.log("Die Emission von Australien, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilAustralia08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit 2008: " + prozentanteilAustralia08.toFixed(2) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eAustralia.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eAustralia.toFixed(2) + "kg CO2");
//Africa
console.log("-Afrika-");
console.log("Die Emission von Afrika im Jahr 2018 ist: " + africa2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Afrika im Jahr 2008 ist: " + africa2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Afrika 2008 + 2018 ist insgesamt: " + africa2008.toFixed(2) + africa2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Afrika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilAfrica18.toFixed(2) + "%");
console.log("Die Emission von Afrika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilAfrica08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit 2008: " + prozentanteilAfrica08.toFixed(2) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eAfrica.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eAfrica.toFixed(2) + "kg CO2");
//SouthAmerica
console.log("-Südamerika-");
console.log("Die Emission von Südamerika im Jahr 2018 ist: " + southAmerica2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Südamerika im Jahr 2008 ist: " + southAmerica2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Südamerika 2008 + 2018 ist insgesamt: " + southAmerica2008.toFixed(2) + southAmerica2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Südamerika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilSouthAmerica18.toFixed(2) + "%");
console.log("Die Emission von Südamerika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilSouthAmerica08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit 2008: " + prozentanteilSouthAmerica08.toFixed(2) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eSouthAmerica.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eSouthAmerica.toFixed(2) + "kg CO2");
//NorthAmerica
console.log("-Nordamerika-");
console.log("Die Emission von Nordamerika im Jahr 2018 ist: " + northAmerica2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Nordamerika im Jahr 2008 ist: " + northAmerica2008.toFixed(2) + "kg CO2");
console.log("Die Emission von Nordamerika 2008 + 2018 ist insgesamt: " + northAmerica2008.toFixed(2) + northAmerica2018.toFixed(2) + "kg CO2");
console.log("Die Emission von Nordamerika, im Jahr 2018, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2018, beträgt: " + prozentanteilNorthAmerica18.toFixed(2) + "%");
console.log("Die Emission von Nordamerika, im Jahr 2008, im Vergleich zu der Gesamtemission aller Kontinente, im Jahr 2008, beträgt: " + prozentanteilNorthAmerica08.toFixed(2) + "%");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit 2008: " + prozentanteilNorthAmerica08.toFixed(2) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um '" + PverglCO2eNorthAmerica.toFixed(2) + "%" + "'verändert");
console.log("2018 im Vergleich zu 2008 sind das: " + ZverglCO2eNorthAmerica.toFixed(2) + "kg CO2");
//# sourceMappingURL=script.js.map