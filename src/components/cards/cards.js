import './cards__accordion.js';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const swiperConfig = {
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
}

const swiperBrand = new Swiper('.swiper-brand', swiperConfig);
const swiperTech = new Swiper('.swiper-tech', swiperConfig);
const swiperPrice = new Swiper('.swiper-prices', swiperConfig);

window.addEventListener('resize', () => {
  const width = document.documentElement.clientWidth;
  if (width < 768) return

  swiperBrand.slideTo(0);
  swiperTech.slideTo(0);
  swiperPrice.slideTo(0);
});

