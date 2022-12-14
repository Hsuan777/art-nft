console.log('Hello!');

// $(document).ready(() => {
//   });

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 1,
  loop: true,
  // slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -250,
    depth: 800,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints :{
    1024:{
      slidesPerView: 2,
    }
  },
});

const tabElements = [
  {
      id: 'profile',
      triggerEl: document.querySelector('#profile-tab'),
      targetEl: document.querySelector('#profile')
  },
  {
      id: 'dashboard',
      triggerEl: document.querySelector('#dashboard-tab'),
      targetEl: document.querySelector('#dashboard')
  },
];

// options with default values
const options = {
  defaultTabId: 'profile',
  activeClasses: 'border border-b-base-100',
  inactiveClasses: 'text-primary',
  onShow: () => {
      console.log('tab is shown');
  }
};
if (document.querySelector('#profile-tab')){
  const tabs = new Tabs(tabElements, options);

}


var grid = document.querySelector('.masonry-grid');
var msnry = new Masonry(grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 24,
  percentPosition: true,
  resize: true,
});

$(function() {
  $('[data-collapse-toggle="navbar-default"]').on('click', () => {
    $('#mobileMenu').toggleClass('hidden');
    $('#mobileMenuClose').toggleClass('hidden');
  })
  $('#navbarSearch').on('click', () => {
    if (window.innerWidth < 1024) {
      $('#navbarSearchInput').removeClass('hidden');
      $('[data-collapse-toggle="navbar-default"]').addClass('hidden');
      $('#logo').addClass('hidden');
      $('#resetNavbarMenu').removeClass('hidden');
    }
  })
  $('#resetNavbarMenu').on('click', () => {
    $('#resetNavbarMenu').addClass('hidden');
    $('#navbarSearchInput').removeClass('hidden');
    $('#logo').removeClass('hidden');
    $('#navbarSearchInput').addClass('hidden');
    $('[data-collapse-toggle="navbar-default"]').removeClass('hidden');
  });
  $('#dashboard-tab').on('click', () => {
    var grid = document.querySelector('.masonry-grid');
    var msnry = new Masonry(grid, {
      // options...
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 24,
      percentPosition: true,
      resize: true,
    });
  });
})
