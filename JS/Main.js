//Declare Variables
let hours = document.querySelector(".hr");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");

//Timing Function
function showTime() {
  //Repeat after 1000ms
  setInterval(showTime, 1000);
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  //Conditions for working
  if (hours > 12) {
    hours -= 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //To Display them on Screen
  document.querySelector(".ampm").textContent = hours > 12 ? "AM" : "PM";
  document.querySelector(".hr").textContent = hours;
  document.querySelector(".min").textContent = minutes;
  document.querySelector(".sec").textContent = seconds;
  document.querySelector(".sec").classList.add("hover");
}
showTime();
