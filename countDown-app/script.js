let counterEl = document.querySelector(".counter");
let dayEl = document.getElementById("day");
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");
let year = "31 December 2024";
const countDown = () => {
    let newYear = new Date(year);
    let today = new Date();
    let totalSeconds = Math.floor((newYear - today) / 1000);
    //console.log(totalSeconds)
    let day = Math.floor(totalSeconds / 3600 / 24);
    //console.log(day)
    let hour = Math.floor(totalSeconds / 3600) % 24;
    //console.log(hour)
    let minute = Math.floor(totalSeconds / 60) % 60;
    //console.log(minute)
    let seconds = Math.floor(totalSeconds % 60);
    //console.log(seconds)
    dayEl.innerHTML = formatTime(day);
    hourEl.innerHTML = formatTime(hour);
    minuteEl.innerHTML = formatTime(minute);
    secondEl.innerHTML = formatTime(seconds);
};
setInterval(() => {
    countDown();
    if(counterEl.style.backgroundColor=="yellow"){
        counterEl.style.backgroundColor="blue"
    }else{
        counterEl.style.backgroundColor="yellow"
    }
}, 1000);
//learInterval(timer)
const formatTime = (time) => {
    return time == 0 ? "00" : time < 10 ? `0${time}` : time;
};
