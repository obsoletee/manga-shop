'use strict';

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
}

const logoName = document.querySelector('.logo__link_name');
const logoIcon = document.querySelector('.logo__link_icon img');
const navLinks = document.querySelectorAll('.navigation__link');
const slideImage = document.querySelector('.slide__img');
const containerElements = document.querySelectorAll('.container__element');
const catalogButton = document.querySelector('.catalog__button-viewall');
const personCards = document.querySelectorAll('.bio__person-card');

if (!isMobile.any()) {
	logoName.addEventListener('mouseenter', function (e) {
		logoName.style.color = 'rgba(0, 0, 0, 1)';
		logoName.style.textShadow = '0 0 1px black';
	});
	logoName.addEventListener('mouseleave', function (e) {
		logoName.style.color = '';
		logoName.style.textShadow = '';
	});
	
	logoIcon.addEventListener('mouseenter', function (e) {
		logoIcon.style.transform = 'scale(1.5)';
	});
	logoIcon.addEventListener('mouseleave', function (e) {
		logoIcon.style.transform = '';
	});
	
	for (let el of navLinks) {
		el.addEventListener('mouseenter', function (e) {
				el.style.color = 'rgba(0, 0, 0, 1)';
				el.style.textShadow = '0 0 1px black';
		});
		el.addEventListener('mouseleave', function (e) {
			el.style.color = '';
			el.style.textShadow = '';
		});
	}
	
	slideImage.addEventListener('mouseenter', function (e) {
		slideImage.style.transform = 'scale(110%) translate(0, -10px)';
	});
	slideImage.addEventListener('mouseleave', function (e) {
		slideImage.style.transform = '';
	});
	
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
