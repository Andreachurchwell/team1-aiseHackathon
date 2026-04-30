const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
let activeIndex = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  slides[activeIndex].classList.remove('active');
  activeIndex = index;
  slides[activeIndex].classList.add('active');
  slideCounter.textContent = `${activeIndex + 1} / ${slides.length}`;
}

function nextSlide() {
  const nextIndex = Math.min(activeIndex + 1, slides.length - 1);
  showSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = Math.max(activeIndex - 1, 0);
  showSlide(prevIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    nextSlide();
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    prevSlide();
  }
});

showSlide(activeIndex);
