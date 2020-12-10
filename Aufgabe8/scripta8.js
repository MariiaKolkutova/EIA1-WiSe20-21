var L8;
(function (L8) {
    //7.1
    // Drum Pad Sounds -> Array
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
    //Funktion für 
    function playSample(mp3) { sample[mp3].play(); }
    //Event-Listeners
    document.querySelector(".sample1").addEventListener("click", function () {
        playSample(0);
    });
    document.querySelector(".sample2").addEventListener("click", function () {
        playSample(1);
    });
    document.querySelector(".sample3").addEventListener("click", function () {
        playSample(2);
    });
    document.querySelector(".sample4").addEventListener("click", function () {
        playSample(3);
    });
    document.querySelector(".sample5").addEventListener("click", function () {
        playSample(4);
    });
    document.querySelector(".sample6").addEventListener("click", function () {
        playSample(5);
    });
    document.querySelector(".sample7").addEventListener("click", function () {
        playSample(6);
    });
    document.querySelector(".sample8").addEventListener("click", function () {
        playSample(7);
    });
    document.querySelector(".sample9").addEventListener("click", function () {
        playSample(8);
    });
    //7.2
    // 
    var sequence2 = ["./mp3/hihat.mp3", "./mp3/kick.mp3", "./mp3/snare.mp3"];
    var indexSequence2 = 0;
    //Aufgabe 8
    //Icons
    //play und Pause
    var myPlay = document.getElementById("play");
    var myPause = document.getElementById("pause");
    myPlay.addEventListener("click", function () {
        toogleClasses(this, myPause);
    });
    myPause.addEventListener("click", function () {
        toogleClasses(this, myPlay);
    });
    function toogleClasses(firstHTMLElement, secondHTMLElement) {
        firstHTMLElement.classList.add("is-hidden");
        secondHTMLElement.classList.remove("is-hidden");
    }
    //Funktion für Play/Pause 
    //Funktion für Record/Delete 
})(L8 || (L8 = {}));
//# sourceMappingURL=scripta8.js.map