const overlayForModal = document.querySelector('.overlay--modal'),
	openCallModalButton = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.call').closest('.modal'),
	closeCallModalButton = document.querySelector('.call .i-btn--close'),
	openFeedbackModalButton = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.feedback').closest('.modal'),
	closeFeedbackModalButton = document.querySelector('.feedback .i-btn--close');

function openCallModal() {
	overlayForModal.classList.add('overlay--visible');

	callModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.addEventListener('click', closeCallModalButtonClickHandler);

	document.addEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallModal() {
	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function openFeedbackModal() {
	overlayForModal.classList.add('overlay--visible');

	feedbackModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler);

	document.addEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackModal() {
	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function openCallModalButtonClickHandler() {
	openCallModal();
}

function closeCallModalButtonClickHandler() {
	closeCallModal();
}

function closeCallModalKeydownHandler(event) {
	if (event.keyCode === 27) closeCallModal();
}

function closeCallOverlayClickModalHandler() {
	closeCallModal();
}

function openFeedbackModalButtonClickHandler() {
	openFeedbackModal();
}

function closeFeedbackModalButtonClickHandler() {
	closeFeedbackModal();
}

function closeFeedbackModalKeydownHandler() {
	if (event.keyCode === 27) closeFeedbackModal();
}

function closeFeedbackOverlayClickModalHandler() {
	closeFeedbackModal();
}

openCallModalButton.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler);
});

openFeedbackModalButton.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler);
});
