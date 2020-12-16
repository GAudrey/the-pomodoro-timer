let pomodoro = document.getElementById('pomodoro-timer');

let sec = 60;
let min25 = 24;
let min5 = 4;

pomodoro.textContent = ("25 : 00");

startBtn.addEventListener('click', () =>{
    setInterval(timer, 250);
    function timer() {
        sec--;
        pomodoro.textContent = (min25 + " : " + sec);
        if (sec == 60){
            sec = "00";
            sec--;
        }
        else if (sec == 0){
            min25--;
            sec = 60;
        }
    }
})

stopBtn.addEventListener('click', () =>{

})