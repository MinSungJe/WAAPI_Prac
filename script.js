const planet = document.querySelector('.planet');
const timelineSlider = document.querySelector('input[id="timeline"]');
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
    fill: 'both',
  }
);

playButton.addEventListener('click', () => planetAnimation.play());
stopButton.addEventListener('click', () => planetAnimation.pause());
timelineSlider.addEventListener('input', (e) => {
  planetAnimation.pause();
  const value = e.target.value;
  planetAnimation.currentTime = value;
});
