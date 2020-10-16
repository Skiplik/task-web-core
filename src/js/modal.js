const overlayForModal = document.querySelector('.overlay--modal'),
	openCallModalButton = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.call').closest('.modal'),
	closeCallModalButton = document.querySelector('.call .i-btn--close'),
	openFeedbackModalButton = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.feedback').closest('.modal'),
	closeFeedbackModalButton = document.querySelector('.feedback .i-btn--close');

function openCallModalButtonClickHandler() {
	overlayForModal.classList.add('overlay--visible');

	callModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.addEventListener('click', closeCallModalButtonClickHandler);

	document.addEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallModalButtonClickHandler() {
	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallModalKeydownHandler(event) {
	if (event.keyCode !== 27) return;

	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallOverlayClickModalHandler() {
	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function openFeedbackModalButtonClickHandler() {
	overlayForModal.classList.add('overlay--visible');

	feedbackModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler);

	document.addEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackModalButtonClickHandler() {
	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackModalKeydownHandler() {
	if (event.keyCode !== 27) return;

	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackOverlayClickModalHandler() {
	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

openCallModalButton.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler);
});

openFeedbackModalButton.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler);
});
