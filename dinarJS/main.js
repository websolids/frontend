let seconds = 0;
let timer = null; 
const timerDisplay = document.getElementById("timerDisplay");
const stopButton = document.getElementById("stop");
const startPauseButton = document.getElementById("startPause");

startPauseButton.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(() => timerDisplay.textContent = ++seconds + " секунд", 1000);
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    timerDisplay.textContent = "0 секунд";
});
