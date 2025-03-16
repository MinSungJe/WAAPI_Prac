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
  { duration: 3000, fill: 'forwards', easing: 'linear' }
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

// JS 애니메이션

const bluePlanet = document.querySelector('.planet[id=blue]');
const title2 = document.querySelector('.title-text2');
const manyPlayButton2 = document.querySelector(".many-container button[id='play2']");
const manyStopButton2 = document.querySelector(".many-container button[id='stop2']");
const manyTimelineSlider2 = document.querySelector('input[id="manyTimeline2"]');

let startTime = null;
let animationFrameId = null;
let isPlaying = false;
const planetDuration = 3000; // 행성 애니메이션 지속 시간
const titleFadeDuration = 1000; // 타이틀 등장 시간

// 애니메이션 프레임 계산 함수
function animateBluePlanet(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;

  if (elapsed >= planetDuration + titleFadeDuration) {
    bluePlanet.style.transform = 'translateX(0px) rotate(360deg) scale(1)';
    title2.style.opacity = '1';
    cancelAnimationFrame(animationFrameId);
    isPlaying = false;
    return;
  }

  if (elapsed < planetDuration) {
    const progress = elapsed / planetDuration;
    const translateX = -450 + 450 * progress;
    const rotate = 360 * progress;
    const scale = progress;

    bluePlanet.style.transform = `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`;
    title2.style.opacity = '0'; // 타이틀은 처음엔 보이지 않음
  } else {
    const titleProgress = (elapsed - planetDuration) / titleFadeDuration;
    title2.style.opacity = titleProgress;
  }

  animationFrameId = requestAnimationFrame(animateBluePlanet);
}

// 재생 버튼 이벤트
manyPlayButton2.addEventListener('click', () => {
  if (!isPlaying) {
    startTime = performance.now();
    isPlaying = true;
    requestAnimationFrame(animateBluePlanet);
  }
});

// 정지 버튼 이벤트
manyStopButton2.addEventListener('click', () => {
  isPlaying = false;
  cancelAnimationFrame(animationFrameId);
});

// 슬라이더 입력 이벤트
manyTimelineSlider2.addEventListener('input', (e) => {
  cancelAnimationFrame(animationFrameId);
  const value = e.target.value;
  const progress = value / planetDuration;

  bluePlanet.style.transform = `translateX(${-450 + 450 * progress}px) rotate(${
    360 * progress
  }deg) scale(${progress})`;
  title2.style.opacity = progress >= 1 ? 1 : 0; // 슬라이더 값이 100%일 때 타이틀이 보이게 설정
});
