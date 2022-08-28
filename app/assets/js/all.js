console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var grid = document.querySelector('.masonry-grid');
var msnry = new Masonry(grid, {
  // options...
  itemSelector: '.grid-item',
  // columnWidth: 300,
  gutter: 24,
});
