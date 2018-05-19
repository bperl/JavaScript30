const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fs = player.querySelector('.player__fullscreen');

function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}

function toggleButton() {
  toggle.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

function handleUpdate() {
  console.log(this.name);
  console.log(this.value);
  video[this.name] = this.value;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullscreen(e) {
  video.webkitRequestFullscreen();
  video.mozRequestFullScreen();
  video.msRequestFullscreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleUpdate));

progress.addEventListener('click', scrub);
fs.addEventListener('click', toggleFullscreen);
