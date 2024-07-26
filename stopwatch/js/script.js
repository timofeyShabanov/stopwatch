let sec = 1;
let min = 0; 
let hour = 0;
let day = 0;
let print = function() {
    $("#clock").text(sec + " sec")
    sec++
    //проверка минут
    if (min > 0){ 
        $("#clock").append(" " + min + " min")
    }
    if (sec == 60){
        sec = 0;
        min++
    };
    //проверка часов
    if (hour > 0){ 
        $("#clock").append(" " + hour + " hour")
    }
    if (min == 60){
        min = 0;
        hour++
    };
    //проверка суток
    if (day > 0){ 
        $("#clock").append(" " + day + " day")
    }
    if (hour == 24){
        hour = 0;
        day++
    };
};

let intervalId = setInterval(print, 1000)