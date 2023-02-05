gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  gsap.utils.toArray('.demo').forEach((div, index) => {
    const w = div.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - div.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: div,
        scrub: 0.5 } });
  });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);