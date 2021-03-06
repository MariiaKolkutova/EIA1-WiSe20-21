namespace L8 {

// Drum Pad Sounds -> Array -> für alle Beats
let sample: HTMLAudioElement[] = [];
sample[0] = new Audio("./mp3/A.mp3");
sample[1] = new Audio("./mp3/C.mp3");
sample[2] = new Audio("./mp3/F.mp3");
sample[3] = new Audio("./mp3/G.mp3");
sample[4] = new Audio("./mp3/hihat.mp3");
sample[5] = new Audio("./mp3/kick.mp3");
sample[6] = new Audio("./mp3/laugh-1.mp3");
sample[7] = new Audio("./mp3/laugh-2.mp3");
sample[8] = new Audio("./mp3/snare.mp3");

//Funktion Abspielen von Beats für jedes Button 
function playSample(mp3: number): void {sample[mp3].play(); }

//Event-Listeners --> PlaySample UND Beatrecord!! 
document.querySelector(".sample1").addEventListener("click", function(): void {
    playSample(0);
    beatrecord(0);
});
document.querySelector(".sample2").addEventListener("click", function(): void {
    playSample(1);
    beatrecord(1);
});
document.querySelector(".sample3").addEventListener("click", function(): void {
    playSample(2);
    beatrecord(2);
});
document.querySelector(".sample4").addEventListener("click", function(): void {
    playSample(3);
    beatrecord(3);
});
document.querySelector(".sample5").addEventListener("click", function(): void {
    playSample(4);
    beatrecord(4);
});
document.querySelector(".sample6").addEventListener("click", function(): void {
    playSample(5);
    beatrecord(5);
});
document.querySelector(".sample7").addEventListener("click", function(): void {
    playSample(6);
    beatrecord(6);
});
document.querySelector(".sample8").addEventListener("click", function(): void {
    playSample(7);
    beatrecord(7);
});
document.querySelector(".sample9").addEventListener("click", function(): void {
    playSample(8);
    beatrecord(8);
});

//Record Button
const recordbtn: HTMLElement = document.getElementById("record");

/* aktivieren und deaktivieren vom "Record Button" 
-> nur beim click "active"!
-> "recordbtn.classList" --> contains/ remove/ add!!*/

recordbtn.addEventListener("click", function (): void {
    if (recordbtn.classList.contains("active")) {
        recordbtn.classList.remove("active");
    } else {
        recordbtn.classList.add("active");
    }
});

// Array für "beatLoop" --> speichern Beats 
let beatLoop: number[] = [];

/* Funktion für Beatrecord 
-> es sollt aufnehmen beim click auf den record Button 
+ aufhören beim erneuten click
-> Array soll geleert werden*/

function beatrecord(pad: number): void {
if (recordbtn.classList.contains("active")) {beatLoop.push(pad); }
}

//Delete Button
const deletebtn: HTMLElement = document.getElementById("delete");

deletebtn.addEventListener("click", function(): void {beatLoop = []; });

// myInterval definieren -> Parameter! 
let myInterval: number;

/* Boolean --> true or false Aussagen 
-> für if it's true/ if it's false -> if-else Aussagen*/
var beatPlay: boolean;

/* eine Variable "z" definiert 
--> eine unbestimmte/ flexibele Zahl*/  
var z: number = 0;

// Funktion!!! --> if-else 
/* Abspielen von meinem Interval "wenn" die Aussage wahr ist, wenn der Button gedrückt wird, wenn nicht "clearInterval"
wenn es "wahr ist, soll das Beat abgespielt werden, wenn es (Z) kleiner als "beatLoop.lenght" ist (die Höchstlänge vom Beat) --> 
z++ -> nach jedem Z soll euín weiteres Beat dazu kommen (z+1),
Wenn mein "beatLoop.lenght" erreicht ist (else), soll z auf die nullte/ erste Stelle 0 gesetzt werden*/

function playBeat(): void {
    
      
       if ( beatPlay == true ) {
        myInterval = setInterval(function (): void {
            if (z < beatLoop.length) { 
            playSample(beatLoop[z]);
            z++; }
            else {
            z = 0;
            }
               },                300);
       } else {
        clearInterval(myInterval);
       }
}


//Play und Pause Buttons --> Aktivierung + "is-hidden"
//myPlay und myPause definiert

const myPlay: HTMLElement = document.getElementById("play");

const myPause: HTMLElement = document.getElementById("pause");

/*Play 
--> "this"! + "PLayBeat"*/
myPlay.addEventListener("click", function (): void {
toogleClasses(this, myPause);
beatPlay = true;
playBeat();
});

//Pause
myPause.addEventListener("click", function (): void {
toogleClasses(this, myPlay);
beatPlay = false;
playBeat();
});

/*Funktion für den Austausch zwischen Play und Pause Button (is-hiiden) 
--> toogleClasses*/
function toogleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
firstHTMLElement.classList.add("is-hidden");
secondHTMLElement.classList.remove("is-hidden"); 
}

}