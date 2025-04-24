let currentIndex = 0;

  function moveCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const cardWidth = carousel.children[0].offsetWidth + 16; // 16px margin (mx-2)
    const maxIndex = carousel.children.length - 1;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }