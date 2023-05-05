const newsLetterInput = document.querySelector('.newsletter__input');
const newsLetterSubmit = document.querySelector('.newsletter__submit');
const socialMediaList = document.querySelectorAll('.social-media__list__image');
const infoList = document.querySelector('.info__list');
const infoHeader = document.querySelector('.container__info .info__header');
const infoListElements = document.querySelectorAll('.info__list > li > a');

if (!isMobile.any()) {
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
		infoList.classList.toggle('active');
	});
	newsLetterInput.addEventListener('focus', function (e) {
		newsLetterInput.style.border = '3px solid orange';
	});
	newsLetterInput.addEventListener('blur', function (e) {
		newsLetterInput.style.border = '';
		newsLetterInput.style.borderBottom = '3px solid white';
	});
}