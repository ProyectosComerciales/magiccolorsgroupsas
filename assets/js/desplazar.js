  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let scrollPosition = 0;
  const scrollStep = 300; // pixeles que se mueve al hacer click (ajustable)
  
  prevBtn.addEventListener('click', () => {
    scrollPosition -= scrollStep;
    if (scrollPosition < 0) scrollPosition = 0;
    track.style.transform = `translateX(-${scrollPosition}px)`;
  });

  nextBtn.addEventListener('click', () => {
    scrollPosition += scrollStep;
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    track.style.transform = `translateX(-${scrollPosition}px)`;
  });