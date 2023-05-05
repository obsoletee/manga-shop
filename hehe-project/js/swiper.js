"use strict";

const slider = document.querySelector('.slider-items');
const sliderItems = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const slideWidth = sliderItems[0].clientWidth;
const sliderWrapper = document.querySelector('.swiper-wrapper');
let currentPosition = 0;

prevBtn.addEventListener('click', function() {
  if (currentPosition === 0) {
    currentPosition = -slideWidth * (sliderItems.length - 1);
  } else {
    currentPosition += slideWidth;
  }
  slider.style.left = currentPosition + 'px';
});

nextBtn.addEventListener('click', function() {
  if (currentPosition === -slideWidth * (sliderItems.length - 1)) {
    currentPosition = 0;
  } else {
    currentPosition -= slideWidth;
  }
  slider.style.left = currentPosition + 'px';
});

setInterval(function() {
  nextBtn.click();
}, 10000);
