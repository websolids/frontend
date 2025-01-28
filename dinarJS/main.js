function countdown(seconds) {
  function timerFunction() {
    console.log(seconds > 0 ? `Осталось секунд: ${seconds}` : "Время вышло");
    seconds--;
    seconds < 0 && clearInterval(timer); 
  }

  const timer = setInterval(timerFunction, 1000); 
}

countdown(10);
