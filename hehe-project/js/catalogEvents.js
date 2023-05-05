"use strict";

const asideSearchFieldWrapper = document.querySelector(".aside-menu__search-field");
const asideSearchField =  document.querySelector(".search-field__search");
const asideButtons = document.querySelector(".aside-menu__buttons")
const asideFlags = document.querySelector(".aside-menu__flags");
const flagsCheckBox = document.querySelectorAll(".flags__item");
const catalogPageItem = document.querySelectorAll(".page__item");
const catalogBullets = document.querySelectorAll(".page-counter__bullet");
// Поле поиска
asideSearchField.addEventListener("focus", (e) => {
	asideSearchFieldWrapper.style.border = "2px solid blue";
	asideSearchField.placeholder = "";
})

asideSearchField.addEventListener("blur", (e) => {
	asideSearchFieldWrapper.style.border = "";
	asideSearchField.placeholder = "Поиск";
})

// Анимация наведения на кнопки для пк
if (!isMobile.any()) {
	asideButtons.addEventListener("mouseover", (e) => {
		if (e.target.closest(".buttons__all-button")) {
			if (!e.target.classList.contains("active")) {
				e.target.style.backgroundColor = "rgba(128,128,128,1)";
			}
		}
		if (e.target.closest(".buttons__exist-button")) {
			if (!e.target.classList.contains("active")) {
				e.target.style.backgroundColor = "rgba(128,128,128,1)";
			}
		}
	});

	asideButtons.addEventListener("mouseleave", (e) => {
			if (!asideButtons.children[0].classList.contains("active")) {
				asideButtons.children[0].style.backgroundColor = "";
			}
			if (!asideButtons.children[1].classList.contains("active")) {
				asideButtons.children[1].style.backgroundColor = "";
			}
	});

	flagsCheckBox.forEach((el) => {
		el.firstElementChild.addEventListener("mouseover", (e) => {
				if (!el.firstElementChild.classList.contains("active")) {
					el.firstElementChild.style.background = "rgba(128,128,128,1)";
				}
				el.firstElementChild.style.boxShadow = "1px 1px 5px black";
		});
	});

	flagsCheckBox.forEach((el) => {
		el.firstElementChild.addEventListener("mouseleave", (e) => {
			if (!el.firstElementChild.classList.contains("active")) {
				el.firstElementChild.style.background = "";
			}
			el.firstElementChild.style.boxShadow = "";
		});
	});

	catalogPageItem.forEach((el) => {
		el.addEventListener("mouseover", (e) => {
			el.lastElementChild.classList.add("active");
		})
	});

	catalogPageItem.forEach((el) => {
		el.addEventListener("mouseleave", (e) => {
			el.lastElementChild.classList.remove("active");
		})
	});

	catalogBullets.forEach((el) => {
		el.addEventListener("mouseover", (e) => {
			if (!el.classList.contains("active")) {
				el.style.background = "rgba(128,128,128,1)";
			}
		});
	});

	catalogBullets.forEach((el) => {
		el.addEventListener("mouseleave", (e) => {
			if (!el.classList.contains("active")) {
				el.style.background = "";
			}
		});
	});

}

// Нажатие на кнопки
asideButtons.addEventListener("click", (e) => {
	if (!e.target.classList.contains('active')) {
		asideButtons.children[0].classList.toggle('active');
		asideButtons.children[1].classList.toggle('active');
		asideButtons.children[0].style.backgroundColor = "";
		asideButtons.children[1].style.backgroundColor = "";
	}
});

flagsCheckBox.forEach((el) => {
	el.firstElementChild.addEventListener("click", (e) => {
			el.firstElementChild.classList.toggle("active");
			el.firstElementChild.style.background = "";
	});
});

catalogBullets.forEach((el) => {
	el.addEventListener("click", (e) => {
		if (!el.classList.contains("active")) {
			catalogBullets.forEach((el) => {
				el.classList.remove("active");
				el.style.background = "";
			});
			el.classList.add("active");
		}
	});
});