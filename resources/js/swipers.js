let introSwiperImages = new Swiper(".intro-swiper-images", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  loopedSlides: 4,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".intro-next",
    prevEl: ".intro-prev",
  },
});

let introSwiperText = new Swiper(".intro-swiper-text", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  loopedSlides: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".intro-next",
    prevEl: ".intro-prev",
  },
});

introSwiperText.disable();
introSwiperImages.controller.control = introSwiperText;

let eventSwiper = new Swiper(".event-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    scale: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".event-next",
    prevEl: ".event-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2.5,
    },
  }
});

let placesSwiper = new Swiper(".places-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 15,
  navigation: {
    nextEl: ".places-next",
    prevEl: ".places-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 1.8,
    },
  }
});

let storiesSwiper = new Swiper(".stories-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.4,
  initialSlide: 3,
  spaceBetween: 30,
  centeredSlides: true,
  scrollbar: {
    el: ".stories-scroll",
  },
  breakpoints:{
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    }
  },
});

let servicesSwiper = new Swiper(".services-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 15,
  initialSlide: 3,
  centeredSlides: true,
  navigation: {
    nextEl: ".services-next",
    prevEl: ".services-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 7,
    }
  },
});
