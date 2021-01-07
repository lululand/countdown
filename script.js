const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const inaugurationDay = new Date(`January 20 ${currentYear} 00:00:00`);
// let interval;

// update countdown
function updateCountdown() {
  const currentTime = new Date();

  // if(currentTime.getTime() >= inaugurationDay.getTime()) {
  //   return clearInterval(interval);
  // }

  const diff = inaugurationDay - currentTime;

  // now calculate days hours mins secs
  // d for days, dividing by 1000 milliseconds to get # of seconds
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // % 24 & 60 is to account for the # of hours/mins that have already passed today
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// show preloader first
setTimeout(() => {
  loading.remove();
  countdown.setAttribute("style", "display: flex !important;");
  // countdown.style.display = 'flex !important'; 
}, 1000);

// run every second
// interval = setInterval(updateCountdown, 1000);
setInterval(updateCountdown, 1000);
