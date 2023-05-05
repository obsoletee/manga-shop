"use strict";

const logoName = document.querySelector('.logo__link_name');
const logoIcon = document.querySelector('.logo__link_icon img');
const navLinks = document.querySelectorAll('.navigation__link');
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
}

if (isMobile.any()) {
	navigationBurger.addEventListener('touchstart', function (e) {
		menuList.classList.toggle('active');	
	});
}
