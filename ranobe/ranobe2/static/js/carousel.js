
/*carousel*/
document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 0;
  var items = document.querySelectorAll('.carousel .carousel-item');
  var itemLength = items.length;

  // Function to move to the next slide
  function moveNext() {
    // If it's the last slide, reset to 0, else move to the next
    currentIndex = (currentIndex + 1) % itemLength;
    updateCarousel();
  }

  // Function to move to the previous slide
  function movePrev() {
    // If it's the first slide, move to the last, else move to the previous
    currentIndex = (currentIndex - 1 + itemLength) % itemLength;
    updateCarousel();
  }

  // Updating the position of the carousel
  function updateCarousel() {
    var newLeft = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + newLeft + '%)';
  }

  // Add click events to buttons
  document.querySelector('.carousel-control-next').addEventListener('click', moveNext);
  document.querySelector('.carousel-control-prev').addEventListener('click', movePrev);

  // Optional: Auto move carousel
  setInterval(moveNext, 3000); // Change slide every 3 seconds
});
/*carousel*/