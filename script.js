const pomodoro = document.getElementById('pomodoro-timer');

let sec = 120;
let min = Math.floor((sec/60));
let displaySec = sec%60;

function displayTime(){
    if (displaySec < 10){
        pomodoro.textContent = `${min}:0${displaySec}`;
        if (min < 10 && displaySec < 10){
            pomodoro.textContent = `0${min}:0${displaySec}`;
        }
    }
    else if (min < 10){
        pomodoro.textContent = `0${min}:${displaySec}`;
        if (min < 10 && displaySec < 10){
            pomodoro.textContent = `0${min}:0${displaySec}`;
        }
    }
    else{
        pomodoro.textContent = `${min}:${displaySec}`;
    }
}

displayTime()

function startTimer() {
    min = Math.floor((sec/60));
    displaySec = sec%60;
    sec--;
    displayTime();
    if (sec < 0){
        stopTimer();
    }
}

let interval;

function stopTimer(){
    clearInterval(interval)
}

let startBtnClicked = true;

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