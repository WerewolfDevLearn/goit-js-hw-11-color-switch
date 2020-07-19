const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};
let colorChangeInterval = null;

refs.start.addEventListener('click', startColorChange);
refs.stop.addEventListener('click', stopColorChange);

function startColorChange() {
  colorChangeInterval = setInterval(colorChange, 1000);
  refs.start.disabled = true;
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
  refs.body.style.backgroundColor = currentColor;
  refs.start.disabled = false;
}

function colorChange() {
  const min = 0;
  const max = colors.length - 1;
  const colorIndex = randomIntegerFromInterval(min, max);
  refs.body.style.backgroundColor = colors[colorIndex];
  currentColor = colors[colorIndex];
  return currentColor;
}
