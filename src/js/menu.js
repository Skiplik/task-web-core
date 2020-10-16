const burgerBtn = document.querySelector('.header__burger-btn'),
	aside = document.querySelector('.aside'),
	closeBtn = aside.querySelector('.aside .i-btn--close');

function openMenuButtonClickHandler() {
	aside.classList.add('aside--open');

	closeBtn.addEventListener('click', closeMenuHandler);

	aside.addEventListener('click', closeMenuOverlayClickHandler);

	document.addEventListener('keyup', closeMenuHandler);
}

/*
* Вопрос на счет наименования обработчиков
* если один обработчик подходит под разные типы событий, как его называть?
* не дублировать же код тольок ради разных наименований?
* closeMenuHandler - его я использую для клика по кнопке и нажатия Esc
* */
function closeMenuHandler() {
	aside.classList.remove('aside--open');

	closeBtn.removeEventListener('click', closeMenuHandler);

	aside.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keyup', closeMenuHandler);
}

function closeMenuOverlayClickHandler(event) {
	if (event.target.classList.contains('aside')) closeMenuHandler();
}

burgerBtn.addEventListener('click', openMenuButtonClickHandler)
