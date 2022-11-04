var hrs = document.getElementById("hrs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var hours = prompt("Enter Hours");
var minutes = prompt("Enter minutes");
var seconds = prompt("Enter Seconds");
var interval;

hrs.innerHTML = hours;
min.innerHTML = minutes;
sec.innerHTML = seconds;


var btn_start = document.getElementById("btn_start")
var btn_stop = document.getElementById("btn_stop")
var btn_reset = document.getElementById("btn_reset")


function timer() {
    if (seconds > 0) {
        seconds--;
        sec.innerHTML = seconds;

    } else if (minutes > 0) {
        minutes--;
        seconds = 60

        min.innerHTML = minutes



    } else if (hours > 0) {
        hours--;
        minutes = 60;

        hrs.innerHTML = hours

    }

}

function start() {
    interval = setInterval(timer, 1000)
    btn_start.disabled = true;
    btn_stop.disabled = false;
    btn_reset.disabled = false;

}


function stop() {
    clearInterval(interval)
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = false;
}


function reset() {

    hours = prompt("Enter Hours");
    minutes = prompt("Enter minutes");
    seconds = prompt("Enter Seconds");

    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;

    stop()

    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = true;
}