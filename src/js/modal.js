const overlayForModal = document.querySelector('.overlay--modal'),
	openCallModalButton = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.modal--call'),
	closeCallModalButton = document.querySelector('.call .i-btn--close'),
	openFeedbackModalButton = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.modal--feedback'),
	closeFeedbackModalButton = document.querySelector('.feedback .i-btn--close');

function openCallModal() {
	overlayForModal.classList.add('overlay--visible');

	callModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', calModalOverlayClickHandler);

	closeCallModalButton.addEventListener('click', closeCallModalButtonClickHandler);

	document.addEventListener('keydown', callModalEscapeKeydownHandler);
}

function closeCallModal() {
	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', calModalOverlayClickHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', callModalEscapeKeydownHandler);
}

function openFeedbackModal() {
	overlayForModal.classList.add('overlay--visible');

	feedbackModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', feedbackModalOverlayClickHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler);

	document.addEventListener('keydown', feedbackModalEscapeKeydownHandler);
}

function closeFeedbackModal() {
	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', feedbackModalOverlayClickHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', feedbackModalEscapeKeydownHandler);
}

function openCallModalButtonClickHandler() {
	openCallModal();
}

function closeCallModalButtonClickHandler() {
	closeCallModal();
}

function callModalEscapeKeydownHandler(event) {
	if (event.keyCode === 27) closeCallModal();
}

function calModalOverlayClickHandler() {
	closeCallModal();
}

function openFeedbackModalButtonClickHandler() {
	openFeedbackModal();
}

function closeFeedbackModalButtonClickHandler() {
	closeFeedbackModal();
}

function feedbackModalEscapeKeydownHandler(event) {
	if (event.keyCode === 27) closeFeedbackModal();
}

function feedbackModalOverlayClickHandler() {
	closeFeedbackModal();
}

openCallModalButton.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler);
});

openFeedbackModalButton.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler);
});
