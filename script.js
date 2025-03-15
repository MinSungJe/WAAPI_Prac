const planet = document.querySelector('.planet');
const playButton = document.querySelector('button[id="play"]');
const stopButton = document.querySelector('button[id="stop"]');

const planetAnimation = planet.animate(
  [
    { transform: 'translateX(-360px) rotateZ(0deg)' },
    { transform: 'translateX(360px) rotateZ(360deg)' },
  ],
  {
    duration: 3000,
    iterations: Infinity,
    fill: 'forwards',
  }
);

playButton.addEventListener('click', () => planetAnimation.play());
stopButton.addEventListener('click', () => planetAnimation.pause());
