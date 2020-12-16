let pomodoro = document.getElementById('pomodoro-timer');

let sec = 120;
let min = Math.floor((sec/60));
let displaySec = sec%60;
let interval;
let startBtnClicked = true;

pomodoro.textContent = `${min} : ${displaySec}`;

function displayTime(){
    if (displaySec < 10){
        pomodoro.textContent = `${min} : 0${displaySec}`;
        console.log("sec < 10")
        if (min < 10 && displaySec < 10){
            pomodoro.textContent = `0${min} : 0${displaySec}`;
            console.log("< 10 min and sec")
        }
    }
    else if (min < 10){
        pomodoro.textContent = `0${min} : ${displaySec}`;
        console.log("min < 10")
        if (min < 10 && displaySec < 10){
            pomodoro.textContent = `0${min} : 0${displaySec}`;
            console.log("< 10 min and sec")
        }
    }
    else{
        pomodoro.textContent = `${min} : ${displaySec}`;
        console.log("tout baigne")
    }
}

function startTimer() {
    min = Math.floor((sec/60));
    displaySec = sec%60;
    sec--;
    displayTime();
    if (sec < 0){
        stopTimer();
    }
}

function stopTimer(){
    clearInterval(interval)
}

startBtn.addEventListener('click', () =>{
    if (startBtnClicked == true){
        startBtnClicked = false;
        interval = setInterval(startTimer, 250);
        startTimer()
    }
})

stopBtn.addEventListener('click', () =>{
    if (startBtnClicked == false){
        startBtnClicked = true;
        stopTimer();
    }
})