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

	document.addEventListener('keyup', closeCallModalKeyupHandler);
}

function closeCallModalButtonClickHandler() {
	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keyup', closeCallModalKeyupHandler);
}

function closeCallModalKeyupHandler() {
	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keyup', closeCallModalKeyupHandler);
}

function closeCallOverlayClickModalHandler(event) {
	if (!event.target.classList.contains('modal')) return;

	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler)

	document.removeEventListener('keyup', closeCallModalKeyupHandler);
}

function openFeedbackModalButtonClickHandler() {
	feedbackModal.classList.add('modal--open');

	feedbackModal.addEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler)

	document.addEventListener('keyup', closeFeedbackModalKeyupHandler);
}

function closeFeedbackModalButtonClickHandler() {
	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keyup', closeFeedbackModalKeyupHandler);
}

function closeFeedbackModalKeyupHandler() {
	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keyup', closeFeedbackModalKeyupHandler);
}

function closeFeedbackOverlayClickModalHandler(event) {
	if (!event.target.classList.contains('modal')) return;

	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler)

	document.removeEventListener('keyup', closeFeedbackModalKeyupHandler);
}

openCallModalButton.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler)
});

openFeedbackModalButton.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler)
});
