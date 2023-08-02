const timing = document.querySelector(".stopwatch .timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");



let secs = 0;
let interval = null;

startBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)


function time () {
   
secs++;

// format our time
let hours = Math.floor(secs / 3600) // 3600 seconds in an hour
let minutes = Math.floor((secs - (hours * 3600)) / 60); //60 secs in a minute
let seconds = secs % 60; // example if secs is 1 it will do 60 x 0 = 0 and then +1 to = 1 which is the output


if (seconds < 10) seconds = "0" + seconds;
if (minutes < 10) minutes = "0" + minutes;
if (hours < 10) hours = "0" + hours;

timing.innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (interval) {
        return
    }

interval = setInterval(time, 1000);


}

function pause() {
    
clearInterval(interval);
interval = null;

}

function reset() {
    pause();
    secs = 0;
    timing.innerText = "00:00:00";
}




















