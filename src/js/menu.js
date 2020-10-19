const overlayForMenu = document.querySelector('.overlay--menu'),
	openMenuButton = document.querySelector('.header__burger-btn'),
	menuContainer = document.querySelector('.aside'),
	closeMenuButton = document.querySelector('.aside .i-btn--close');

function openMenu() {
	overlayForMenu.classList.add('overlay--visible');

	menuContainer.classList.add('aside--open');

	closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.addEventListener('click', menuOverlayClickHandler);

	document.addEventListener('keydown', escapeKeydownHandler);
}

function closeMenu() {
	menuContainer.classList.remove('aside--open');

	overlayForMenu.classList.remove('overlay--visible');

	closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);

	overlayForMenu.removeEventListener('click', menuOverlayClickHandler);

	document.removeEventListener('keydown', escapeKeydownHandler);
}

function openMenuButtonClickHandler() {
	openMenu();
}

function closeMenuButtonClickHandler() {
	closeMenu();
}

function escapeKeydownHandler(event) {
	if (event.keyCode === 27) closeMenu();
}

function menuOverlayClickHandler() {
	closeMenu();
}

openMenuButton.addEventListener('click', openMenuButtonClickHandler)
