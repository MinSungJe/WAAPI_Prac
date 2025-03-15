const planet = document.querySelector('.planet');

const planetAnimation = planet.animate(
  [
    { transform: 'translateX(-360px) rotateZ(0deg)' },
    { transform: 'translateX(360px) rotateZ(360deg)' },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  }
);
