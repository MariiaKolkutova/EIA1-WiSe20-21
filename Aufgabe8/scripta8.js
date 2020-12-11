var L8;
(function (L8) {
    // Drum Pad Sounds -> Array -> für alle Beats
    var sample = [];
    sample[0] = new Audio("./mp3/A.mp3");
    sample[1] = new Audio("./mp3/C.mp3");
    sample[2] = new Audio("./mp3/F.mp3");
    sample[3] = new Audio("./mp3/G.mp3");
    sample[4] = new Audio("./mp3/hihat.mp3");
    sample[5] = new Audio("./mp3/kick.mp3");
    sample[6] = new Audio("./mp3/laugh-1.mp3");
    sample[7] = new Audio("./mp3/laugh-2.mp3");
    sample[8] = new Audio("./mp3/snare.mp3");
    //Funktion Abspielen von Beats für jedes Button 
    function playSample(mp3) { sample[mp3].play(); }
    //Event-Listeners --> PlaySample UND Beatrecord!! 
    document.querySelector(".sample1").addEventListener("click", function () {
        playSample(0);
        beatrecord(0);
    });
    document.querySelector(".sample2").addEventListener("click", function () {
        playSample(1);
        beatrecord(1);
    });
    document.querySelector(".sample3").addEventListener("click", function () {
        playSample(2);
        beatrecord(2);
    });
    document.querySelector(".sample4").addEventListener("click", function () {
        playSample(3);
        beatrecord(3);
    });
    document.querySelector(".sample5").addEventListener("click", function () {
        playSample(4);
        beatrecord(4);
    });
    document.querySelector(".sample6").addEventListener("click", function () {
        playSample(5);
        beatrecord(5);
    });
    document.querySelector(".sample7").addEventListener("click", function () {
        playSample(6);
        beatrecord(6);
    });
    document.querySelector(".sample8").addEventListener("click", function () {
        playSample(7);
        beatrecord(7);
    });
    document.querySelector(".sample9").addEventListener("click", function () {
        playSample(8);
        beatrecord(8);
    });
    //Record Button
    var recordbtn = document.getElementById("record");
    /* aktivieren und deaktivieren vom "Record Button"
    -> nur beim click "active"!
    -> "recordbtn.classList" --> contains/ remove/ add!!*/
    recordbtn.addEventListener("click", function () {
        if (recordbtn.classList.contains("active")) {
            recordbtn.classList.remove("active");
        }
        else {
            recordbtn.classList.add("active");
        }
    });
    // Array für "beatLoop" --> speichern Beats 
    var beatLoop = [];
    /* Funktion für Beatrecord
    -> es sollt aufnehmen beim click auf den record Button
    + aufhören beim erneuten click
    -> Array soll geleert werden*/
    function beatrecord(pad) {
        if (recordbtn.classList.contains("active")) {
            beatLoop.push(pad);
        }
    }
    //Delete Button
    var deletebtn = document.getElementById("delete");
    deletebtn.addEventListener("click", function () { beatLoop = []; });
    // myInterval definieren -> Parameter! 
    var myInterval;
    /* Boolean --> true or false Aussagen
    -> für if it's true/ if it's false -> if-else Aussagen*/
    var beatPlay;
    /* eine Variable "z" definiert
    --> eine unbestimmte/ flexibele Zahl*/
    var z = 0;
    // Funktion!!! --> if-else 
    /* Abspielen von meinem Interval "wenn" die Aussage wahr ist, wenn der Button gedrückt wird, wenn nicht "clearInterval"
    wenn es "wahr ist, soll das Beat abgespielt werden, wenn es (Z) kleiner als "beatLoop.lenght" ist (die Höchstlänge vom Beat) -->
    z++ -> nach jedem Z soll euín weiteres Beat dazu kommen (z+1),
    Wenn mein "beatLoop.lenght" erreicht ist (else), soll z auf die nullte/ erste Stelle 0 gesetzt werden*/
    function playBeat() {
        if (beatPlay == true) {
            myInterval = setInterval(function () {
                if (z < beatLoop.length) {
                    playSample(beatLoop[z]);
                    z++;
                }
                else {
                    z = 0;
                }
            }, 300);
        }
        else {
            clearInterval(myInterval);
        }
    }
    //Play und Pause Buttons --> Aktivierung + "is-hidden"
    //myPlay und myPause definiert
    var myPlay = document.getElementById("play");
    var myPause = document.getElementById("pause");
    /*Play
    --> "this"! + "PLayBeat"*/
    myPlay.addEventListener("click", function () {
        toogleClasses(this, myPause);
        beatPlay = true;
        playBeat();
    });
    //Pause
    myPause.addEventListener("click", function () {
        toogleClasses(this, myPlay);
        beatPlay = false;
        playBeat();
    });
    /*Funktion für den Austausch zwischen Play und Pause Button (is-hiiden)
    --> toogleClasses*/
    function toogleClasses(firstHTMLElement, secondHTMLElement) {
        firstHTMLElement.classList.add("is-hidden");
        secondHTMLElement.classList.remove("is-hidden");
    }
})(L8 || (L8 = {}));
//# sourceMappingURL=scripta8.js.map