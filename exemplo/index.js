let minutes = 0;
let seconds = 0;
let elapsedTime = 0;
let startTime = 0;

let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
//buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let Interval;
let paused = true;

startBtn.addEventListener("click", function () {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    Interval = setInterval(updateTime, 1000);
  }
});
stopBtn.addEventListener("click", function () {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(Interval);
  }
});
resetBtn.addEventListener("click", function () {
  paused = true;
  clearInterval(Interval);
  startTime = 0;
  elapsedTime = 0;
  minutes = 0;
  seconds = 0;
  timeDisplay.textContent = "00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  seconds = Math.floor((elapsedTime / 1000) % 60);
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  minutes = pad(minutes);
  seconds = pad(seconds);

  timeDisplay.textContent = `${minutes}:${seconds}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
