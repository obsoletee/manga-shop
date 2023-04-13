"use strict";
new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	simulateTouch: false,

	autoHeight: true,
	//slideToClickedSlide: true,
	//slidesPerView: 1,
	watchOverflow: true,
	
	// mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: ".swiper1",
	// },

});
