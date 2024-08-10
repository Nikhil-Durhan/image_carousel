const images = document.getElementById("images");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const pauseButton = document.getElementById("pause");

const imagesList = document.querySelectorAll("#images img");
let index = 0;
let isPaused = false;

const changeImage = () => {
  if (index > imagesList.length - 1) index = 0;
  else if (index < 0) index = imagesList.length - 1;
  images.style.transform = `translateX(${-index * 500}px)`;
};

const run = () => {
  if (!isPaused) {
    index++;
    changeImage();
  }
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

let interval = setInterval(run, 2000);

rightButton.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

leftButton.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
  if (!isPaused) resetInterval();
});
