let startTime, elapsedTime, intervalId;

function updateTimer() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const minutes = Math.floor((currentTime / 1000 / 60) % 60);
  const seconds = Math.floor((currentTime / 1000) % 60);
  const milliseconds = currentTime % 1000;

  document.getElementById("stopwatch").innerHTML = `${String(minutes).padStart(
    2,
    "0"
  )} : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(
    3,
    "0"
  )}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTimer, 100);
}
startTimer();

function resetTimer() {
  clearInterval(intervalId);
  elapsedTime = 0;
  document.getElementById("stopwatch").textContent = "0:00:00";
}

function stopTimer(){
    clearInterval(intervalId);
}


