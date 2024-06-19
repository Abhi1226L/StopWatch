let play = document.querySelector(".play");
let reset = document.querySelector(".reset");
let pause = document.querySelector(".pause");
let timer = document.querySelector(".timer");
let hour = 0;
let min = 0;
let sec = 0;
let leadingSec = 0;
let leadingMin = 0;
let leadingHour = 0;
let timerId = null;

play.addEventListener("click", function () {
    timerId = setInterval(startTimer, 1);
})

function startTimer() {
    sec++;
    if (sec % 60 == 0) {
        sec = 0;
        min++;
        if (min % 60 == 0) {
            min = 0;
            hour++;
        }
    }

    if(sec < 10){
        leadingSec = "0" + sec.toString();
    }else{
        leadingSec = sec;
    }

    if(min < 10){
        leadingMin = "0" + min.toString();
    }else{
        leadingMin = min;
    }

    if(hour < 10){
        leadingHour = "0" + hour.toString();
    }else{
        leadingHour = hour;
    }

    timer.innerText = leadingHour + ":" + leadingMin + ":" + leadingSec;
}

pause.addEventListener("click",function(){
    clearInterval(timerId);
})

reset.addEventListener("click",function(){
     clearInterval(timerId);
     timer.innerHTML = `00:00:00`;
     sec = min = hour = 0;
})

