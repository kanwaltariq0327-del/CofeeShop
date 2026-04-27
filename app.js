const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

//   HAMBURGER MENU
openMenuButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});
//   CLOSE MENU
closeMenuButton.addEventListener('click', () => openMenuButton.click());

//  CLOSE MENU WHEN CLICK ON LINK
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove("show-mobile-menu");
    });
});


//   CLOSE MENU WHEN CLICK OUTSIDE
document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !openMenuButton.contains(e.target)) {
        document.body.classList.remove("show-mobile-menu");
        }
})


//    SLIDER
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
        slidesPerView : 1
    },
    768: {
        slidesPerView : 2
    },
    1024: {
        slidesPerView : 3
    },
  }
});