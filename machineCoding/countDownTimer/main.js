const timerDisplay = document.getElementById("timer__display");

const startTimerBtn = document.getElementById("start__timer");
const stopTimerBtn = document.getElementById("pause__timer");
const resetTimerBtn = document.getElementById("reset__timer");

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);

let timer;
function startTimer() {
  let time = 10;
  timer = setInterval(() => {
    console.log(time);
    timerDisplay.innerHTML = time;
    time--;
    if (time < 0) {
      clearInterval(timer);
      console.log("Timer has stopped");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
function resetTimer() {
  clearInterval(timer);
  startTimer();
}
