const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

let countdown;

timer = seconds => {
  // let newSeconds = seconds;
  // countdown = setInterval(() => {
  //   if (seconds < 0) {
  //     console.log('finished')
  //     clearInterval(countdown);
  //     return;
  //   } else {
  //     console.log('running')
  //     displayTimeLeft(seconds);
  //     seconds = seconds - 1;
  //   }
  // }, 1000)
  clearInterval(countdown);
  const now = Date.now(); // instead of (new Date()).getTime();
  const finish = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(finish);

  countdown = setInterval(() => {
    const secondsLeft = Math.ceil((finish - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

function displayTimeLeft(secondsLeft) {
  const minutes = Math.floor(secondsLeft / 60);
  // const hours = minutes / 60;
  const remainingSeconds = secondsLeft % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  timerDisplay.innerText = display;
  document.title = display;
  console.log({ minutes, remainingSeconds });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const display = `Be Back At ${hours > 12 ? hours - 12 : hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  endTime.textContent = display;
}

function handleClick(e) {
  timer(this.dataset.time);
}

function handleSubmit(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
}
//
// displayTimeLeft = (seconds) => {
//   let minutes = Math.floor(seconds / 60);
//   let remainingSeconds = seconds % 60;
//   if (remainingSeconds < 10) remainingSeconds = `0${seconds}`;
//   console.log('minutes is: ', minutes);
//   console.log('seconds is: ', remainingSeconds);
//   timerDisplay.innerText = `${minutes}:${remainingSeconds}`;
// }

buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});

document.customForm.addEventListener("submit", handleSubmit); // Named element can be accessed like this
