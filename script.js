const pomodoro = document.getElementById('pomodoro-timer');

let fixTime = 1500;
let sec = fixTime;
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
        pauseTimer();
    }
}

let interval;

function pauseTimer(){
    clearInterval(interval)
}

function resetTimer(){
    clearInterval(interval)
    min = Math.floor((fixTime/60));
    displaySec = fixTime%60;
    displayTime();

    sec = fixTime;
}

let startBtnClicked = true;

startBtn.addEventListener('click', () =>{
    if (startBtnClicked == true){
        startBtnClicked = false;
        interval = setInterval(startTimer, 1000);
        startTimer()
    }
})

pauseBtn.addEventListener('click', () =>{
    if (startBtnClicked == false){
        startBtnClicked = true;
    }
    pauseTimer();
})

resetBtn.addEventListener('click', () =>{
    if (startBtnClicked == false){
        startBtnClicked = true;
    }
    resetTimer();
})