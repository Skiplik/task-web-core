const openCallModalButton = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.call').closest('.modal'),
	closeCallModalButton = document.querySelector('.call .i-btn--close'),
	openFeedbackModalButton = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.feedback').closest('.modal'),
	closeFeedbackModalButton = document.querySelector('.feedback .i-btn--close');

function openCallModalButtonClickHandler() {
	callModal.classList.add('modal--open');

	callModal.addEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.addEventListener('click', closeCallModalButtonClickHandler)

	document.addEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallModalButtonClickHandler() {
	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallModalKeydownHandler() {
	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function closeCallOverlayClickModalHandler(event) {
	if (!event.target.classList.contains('modal')) return;

	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keydown', closeCallModalKeydownHandler);
}

function openFeedbackModalButtonClickHandler() {
	feedbackModal.classList.add('modal--open');

	feedbackModal.addEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler)

	document.addEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackModalButtonClickHandler() {
	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackModalKeydownHandler() {
	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

function closeFeedbackOverlayClickModalHandler(event) {
	if (!event.target.classList.contains('modal')) return;

	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keydown', closeFeedbackModalKeydownHandler);
}

openCallModalButton.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler)
});

openFeedbackModalButton.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler)
});
