"use strict";

const navigationBurger = document.querySelector('.navigation__burger');
const menuList = document.querySelector('.menu__list');

function burgerClick (e) {
	console.log(e);
	menuList.classList.toggle('active');	
}
navigationBurger.addEventListener('click', burgerClick);