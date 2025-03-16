const soloPlanet = document.querySelector('.solo-container .planet');
const timelineSlider = document.querySelector('input[id="timeline"]');
const playButton = document.querySelector('button[id="play"]');
const stopButton = document.querySelector('button[id="stop"]');
const reverseButton = document.querySelector('button[id="reverse"]');

const planetAnimation = soloPlanet.animate(
  [
    { transform: 'translateX(-360px) rotateZ(0deg)' },
    { transform: 'translateX(360px) rotateZ(1turn)' },
  ],
  {
    duration: 3000,
    fill: 'both',
  }
);

playButton.addEventListener('click', () => planetAnimation.play());
stopButton.addEventListener('click', () => planetAnimation.pause());
reverseButton.addEventListener('click', () => planetAnimation.reverse());
timelineSlider.addEventListener('input', (e) => {
  planetAnimation.pause();
  const value = e.target.value;
  planetAnimation.currentTime = value;
});
