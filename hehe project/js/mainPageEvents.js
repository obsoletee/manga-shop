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
const slideImage = document.querySelectorAll('.slide__img');
const containerElements = document.querySelectorAll('.container__element');
const catalogButton = document.querySelector('.catalog__button-viewall');
const personCards = document.querySelectorAll('.bio__person-card');
const infoListElements = document.querySelectorAll('.info__list > li > a');
const newsLetterInput = document.querySelector('.newsletter__input');
const newsLetterSubmit = document.querySelector('.newsletter__submit');
const socialMediaList = document.querySelectorAll('.social-media__list__image');
const infoList = document.querySelector('.info__list');
const infoHeader = document.querySelector('.container__info .info__header');
const navigationBurger = document.querySelector('.navigation__burger');
const menuList = document.querySelector('.menu__list');

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

	for (let el of infoListElements) {
		el.addEventListener('mouseenter', function (e) {
				el.style.borderBottom = '3px solid white';
		});
		el.addEventListener('mouseleave', function (e) {
			el.style.borderBottom = '';
		});

		newsLetterInput.addEventListener('focus', function (e) {
			newsLetterInput.style.border = '3px solid white';
		});
		newsLetterInput.addEventListener('blur', function (e) {
			newsLetterInput.style.border = '';
			newsLetterInput.style.borderBottom = '3px solid white';
		});

		newsLetterSubmit.addEventListener('mouseenter', function (e) {
			newsLetterSubmit.style.transform = 'translate(0, 5px)';
			newsLetterSubmit.style.color = 'white';
			newsLetterSubmit.style.background = '#666666';
		});
		newsLetterSubmit.addEventListener('mouseleave', function (e) {
			newsLetterSubmit.style.transform = '';
			newsLetterSubmit.style.color = '';
			newsLetterSubmit.style.background = '';
		});

		for (let el of socialMediaList) {
			el.addEventListener('mouseenter', function (e) {
				el.style.transform = 'scale(1.25)';
			});
			el.addEventListener('mouseleave', function (e) {
				el.style.transform = '';
			});
		}

	}
}

if (isMobile.any()) {
	infoHeader.addEventListener('click', function (e) {
		console.log(e);
		infoList.classList.toggle('active');
	});

	navigationBurger.addEventListener('touchstart', function (e) {
		menuList.classList.toggle('active');	
	});

	newsLetterInput.addEventListener('focus', function (e) {
		newsLetterInput.style.border = '3px solid orange';
	});
	newsLetterInput.addEventListener('blur', function (e) {
		newsLetterInput.style.border = '';
		newsLetterInput.style.borderBottom = '3px solid white';
	});
}