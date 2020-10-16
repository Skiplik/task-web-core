const overlayForMenu = document.querySelector('.overlay--menu'),
	openMenuButton = document.querySelector('.header__burger-btn'),
	menuContainer = document.querySelector('.aside'),
	closeMenuButton = document.querySelector('.aside .i-btn--close');

function openMenuButtonClickHandler() {
	overlayForMenu.classList.add('overlay--visible');

	menuContainer.classList.add('aside--open');

	closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.addEventListener('click', closeMenuOverlayClickHandler);

	document.addEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuButtonClickHandler() {
	menuContainer.classList.remove('aside--open');

	overlayForMenu.classList.remove('overlay--visible');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuKeydownHandler(event) {
	if (event.keyCode !== 27) return;

	menuContainer.classList.remove('aside--open');

	overlayForMenu.classList.remove('overlay--visible');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

function closeMenuOverlayClickHandler(event) {
	menuContainer.classList.remove('aside--open');

	overlayForMenu.classList.remove('overlay--visible');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.removeEventListener('click', closeMenuOverlayClickHandler);

	document.removeEventListener('keydown', closeMenuKeydownHandler);
}

openMenuButton.addEventListener('click', openMenuButtonClickHandler)
