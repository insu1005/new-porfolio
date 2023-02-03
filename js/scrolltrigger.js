const images = gsap.utils.toArray('img');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);