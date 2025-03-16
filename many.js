const redPlanet = document.querySelector('.planet[id=red]');
const title = document.querySelector('.title-text');
const manyPlayButton = document.querySelector(".many-container button[id='play']");
const manyStopButton = document.querySelector(".many-container button[id='stop']");
const manyTimelineSlider = document.querySelector('input[id="manyTimeline"]');

const redPlanetAnimation = redPlanet.animate(
  [
    { transform: 'translateX(-450px) rotate(0) scale(0)' },
    { transform: 'translateX(0px) rotate(1turn) scale(1)' },
  ],
  { duration: 3000, fill: 'forwards', easing: 'ease' }
);
redPlanetAnimation.pause();

const titleAnimation = title.animate([{ opacity: 0 }, { opacity: 1 }], {
  duration: 1000,
  fill: 'forwards',
});
titleAnimation.pause();

// 둘은 같은 코드
redPlanetAnimation.addEventListener('finish', () => titleAnimation.play());
redPlanetAnimation.onfinish = () => titleAnimation.play();

manyPlayButton.addEventListener('click', () => {
  redPlanetAnimation.play();
  titleAnimation.cancel();
  titleAnimation.pause();
});
manyStopButton.addEventListener('click', () => redPlanetAnimation.pause());
manyTimelineSlider.addEventListener('input', (e) => {
  titleAnimation.cancel();
  titleAnimation.pause();
  redPlanetAnimation.pause();
  const value = e.target.value;
  redPlanetAnimation.currentTime = value;
});
