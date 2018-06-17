const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// timerDisplay.innerText = '10:10'

timer = (seconds) => {
  // let newSeconds = seconds;
  countdown = setInterval(() => {
    if (seconds < 0) {
      console.log('finished')
      clearInterval(countdown);
      return;
    } else {
      console.log('running')
      displayTimeLeft(seconds);
      seconds = seconds - 1;
    }
  }, 1000)
}

function handleClick(e) {
  timer(this.dataset.time);
}

displayTimeLeft = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) remainingSeconds = `0${seconds}`;
  console.log('minutes is: ', minutes);
  console.log('seconds is: ', remainingSeconds);
  timerDisplay.innerText = `${minutes}:${remainingSeconds}`;
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})
