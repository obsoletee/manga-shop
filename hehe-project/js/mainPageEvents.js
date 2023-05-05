'use strict';

const slideImage = document.querySelectorAll('.slide__img');
const containerElements = document.querySelectorAll('.container__element');
const catalogButton = document.querySelector('.catalog__button-viewall');
const personCards = document.querySelectorAll('.bio__person-card');

if (!isMobile.any()) {
	for (let el of slideImage) {
		el.addEventListener('mouseenter', function (e) {
			el.style.transform = 'scale(110%) translate(0, -10px)';
		});
		el.addEventListener('mouseleave', function (e) {
			el.style.transform = '';
		});
	}
	
	for (let el of containerElements) {
		el.addEventListener('mouseenter', function (e) {
				el.style.transform = 'scale(1.2) translate(0, 10px)';
		});
		el.addEventListener('mouseleave', function (e) {
			el.style.transform = '';
		});
	}

	catalogButton.addEventListener('mouseenter', function (e) {
		catalogButton.style.transform = 'translate(0, -5px)';
		catalogButton.style.color = 'white';
		catalogButton.style.background = '#666666';
	});
	catalogButton.addEventListener('mouseleave', function (e) {
		catalogButton.style.transform = '';
		catalogButton.style.color = '';
		catalogButton.style.background = '';
	});

	for (let el of personCards) {
		el.addEventListener('mouseenter', function (e) {
				el.style.boxShadow = '-2px 2px 4px black, -4px 4px 8px black';
				el.style.transform = 'perspective(400px) rotateY(10deg)';
		});
		el.addEventListener('mouseleave', function (e) {
			el.style.boxShadow = '';
				el.style.transform = '';
		});
	}

}
