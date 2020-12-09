//7.1
// Drum Pad Sounds -> Array
let beat: HTMLAudioElement[] = [];
beat[0] = new Audio("./mp3/A.mp3");
beat[1] = new Audio("./mp3/C.mp3");
beat[2] = new Audio("./mp3/F.mp3");
beat[3] = new Audio("./mp3/G.mp3");
beat[4] = new Audio("./mp3/hihat.mp3");
beat[5] = new Audio("./mp3/kick.mp3");
beat[6] = new Audio("./mp3/laugh-1.mp3");
beat[7] = new Audio("./mp3/laugh-2.mp3");
beat[8] = new Audio("./mp3/snare.mp3");

//Funktion
function playSample(mp3: number): void { beat[mp3].play() };

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
let sequence2: string[] = ["./mp3/hihat.mp3", "./mp3/kick.mp3", "./mp3/snare.mp3"];

let indexSequence2: number = 0;

function playBeat(): void {
    setInterval(function () {
        let sample: HTMLAudioElement = new Audio(sequence2[indexSequence2]);
        sample.play();
        indexSequence2 = indexSequence2 + 1;
    },          300);
};

document.querySelector(".playButton").addEventListener("click", function () {
    playBeat();
});
