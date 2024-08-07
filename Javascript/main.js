document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

function getNextFriday() {
  const now = new Date();
  const nextFriday = new Date();
  nextFriday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7));
  nextFriday.setHours(0, 0, 0, 0);
  if (nextFriday.getTime() < now.getTime()) {
    nextFriday.setDate(nextFriday.getDate() + 7);
  }
  return nextFriday;
}

function updateCountdown() {
  const now = new Date().getTime();
  const countdownDate = getNextFriday().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    setNextCountdown();
  }
}

function setNextCountdown() {
  const nextFriday = getNextFriday();
  nextFriday.setDate(nextFriday.getDate() + 7);
  updateCountdown();
}

setInterval(updateCountdown, 1000);
updateCountdown();