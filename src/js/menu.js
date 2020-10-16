const openMenuButton = document.querySelector('.header__burger-btn'),
	menuContainer = document.querySelector('.aside'),
	closeMenuButton = document.querySelector('.aside .i-btn--close');

function openMenuButtonClickHandler() {
	menuContainer.classList.add('aside--open');

	closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);

	menuContainer.addEventListener('click', closeMenuOverlayClickHandler);

	document.addEventListener('keyup', closeMenuKeyupHandler);
}

function closeMenuButtonClickHandler() {
	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keyup', closeMenuKeyupHandler);
}

function closeMenuKeyupHandler() {
	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keyup', closeMenuKeyupHandler);
}

function closeMenuOverlayClickHandler(event) {
	if (!event.target.classList.contains('aside')) return;

	menuContainer.classList.remove('aside--open');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	menuContainer.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keyup', closeMenuKeyupHandler);
}

openMenuButton.addEventListener('click', openMenuButtonClickHandler)
