let menu = document.querySelector("#menu");
let toggleIcon = document.querySelector("#toggle-icon")

toggleIcon.addEventListener("click", function() {
    menu.classList.toggle("menu-on");
});

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");
const NextMasters = "6 Apr 2023";
function countTimer() {
  const BlackFridayDate = new Date(NextMasters);
  const currentDate = new Date();
  const totalSeconds = (BlackFridayDate - currentDate) / 1000;
  const daysCalc = Math.floor(totalSeconds / 3600 / 24);
  const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
  const minsCalc = Math.floor(totalSeconds / 60) % 60;
  const secondsCalc = Math.floor(totalSeconds % 60);

  days.innerHTML = daysCalc;
  hours.innerHTML = hoursCalc;
  mins.innerHTML = minsCalc;
  seconds.innerHTML = secondsCalc;
  if (totalSeconds <= 0) {
    document.querySelector("#days").innerText = 0;
    document.querySelector("#hours").innerText = 0;
    document.querySelector("#mins").innerText = 0;
    document.querySelector("#seconds").innerText = 0;
    document.querySelector(".statuscontador").innerText = "A comprar!";
  }
}
countTimer();
setInterval(countTimer, 1000);
