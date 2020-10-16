const openMenuButton = document.querySelector('.header__burger-btn'),
	menuContainer = document.querySelector('.aside'),
	closeMenuButton = document.querySelector('.aside .i-btn--close');

function openMenuButtonClickHandler() {
	menuContainer.classList.add('aside--open');

	closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);

	menuContainer.addEventListener('click', closeMenuOverlayClickHandler);

	document.addEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuButtonClickHandler() {
	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuKeydownHandler() {
	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuOverlayClickHandler(event) {
	if (!event.target.classList.contains('aside')) return;

	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

openMenuButton.addEventListener('click', openMenuButtonClickHandler)
