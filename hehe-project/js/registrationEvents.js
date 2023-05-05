"use strict";

const regTypeLogIn = document.querySelector('.registration-type__login');
const regTypeSignUp = document.querySelector('.registration-type__signup');

const formEmailInput = document.querySelectorAll('.form__email-input');
const formPasswordInput = document.querySelectorAll('.form__password-input');
const formSubmitBtn = document.querySelectorAll('.form__submit');
const formUsernameInput = document.querySelector('.form__username-input')

const logInSection = document.querySelector('.form-section__form_1')
const signUpSection = document.querySelector('.form-section__form_2')

const formLogIn = document.forms[0];
const formSignUp = document.forms[1];

// Смена регистрации/входа
function regTypeSignUpSwitch (e) {
	regTypeLogIn.classList.remove('active');
	regTypeSignUp.classList.add('active');
	regTypeLogIn.style.background = "";
	regTypeSignUp.style.background = "#3b3b3b";
	signUpSection.style.display = 'flex';
	signUpSection.style.pointerEvents = 'all';
	logInSection.style.display = 'none';
	logInSection.style.pointerEvents = 'none';
	formLogIn.reset();
	formSignUp.reset();
}
regTypeSignUp.addEventListener('click', regTypeSignUpSwitch)

function regTypeLogInSwitch (e) {
	regTypeLogIn.classList.add('active');
	regTypeSignUp.classList.remove('active');
	regTypeSignUp.style.background = "";
	regTypeLogIn.style.background = "#3b3b3b";
	signUpSection.style.display = 'none';
	signUpSection.style.pointerEvents = 'none';
	logInSection.style.display = 'flex';
	logInSection.style.pointerEvents = 'all';
	formLogIn.reset();
	formSignUp.reset();
}
regTypeLogIn.addEventListener('click', regTypeLogInSwitch)


// Поля ввода и кнопка
formUsernameInput.addEventListener('focus', (e) => {
	formUsernameInput.style.border = '2px solid rgba(0, 60, 140)';
	formUsernameInput.style.background = 'rgba(255,255,255,1)'
});

formUsernameInput.addEventListener('blur', (e) => {
	formUsernameInput.style.border = '';
	formUsernameInput.style.background = ''
});

formEmailInput.forEach((el) => {
	el.addEventListener('focus', (e) => {
		el.style.border = '2px solid rgba(0, 60, 140)';
		el.style.background = 'rgba(255,255,255,1)'
	});
});

formEmailInput.forEach((el) => {
	el.addEventListener('blur', (e) => {
		el.style.border = '';
		el.style.background = ''
	});
});

formPasswordInput.forEach((el) => {
	el.addEventListener('focus', (e) => {
		el.style.border = '2px solid rgba(0, 60, 140)';
		el.style.background = 'rgba(255,255,255,1)'
	});
});

formPasswordInput.forEach((el) => {
	el.addEventListener('blur', (e) => {
		el.style.border = '';
		el.style.background = ''
	});
});

if (!isMobile.any()) {
	formSubmitBtn.forEach((el) => {
		el.addEventListener('mouseenter', (e) => {
			el.style.background = 'rgba(0, 60, 140)';
			el.style.border = '3px solid rgba(0, 60, 140)'
		});	
	});
	
	formSubmitBtn.forEach((el) => {
		el.addEventListener('mouseleave', (e) => {
			el.style.background = '';
			el.style.border = '';
		});
	});	
}