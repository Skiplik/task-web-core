const callOpenBtns = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.call').closest('.modal'),
	callCloseBtn = document.querySelector('.call .i-btn--close'),
	feedbackOpenBtns = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.feedback').closest('.modal'),
	feedbackCloseBtn = document.querySelector('.call .i-btn--close');

function openCallModalButtonClickHandler() {
	callModal.classList.add('modal--open');

	callModal.addEventListener('click', closeCallOverlayClickModalHandler);

	callCloseBtn.addEventListener('click', closeCallModalHandler)

	document.addEventListener('keyup', closeCallModalHandler);
}

function closeCallModalHandler() {
	callModal.classList.remove('modal--open');

	callModal.removeEventListener('click', closeCallOverlayClickModalHandler);

	callCloseBtn.removeEventListener('click', closeCallModalHandler)

	document.removeEventListener('keyup', closeCallModalHandler);
}

function closeCallOverlayClickModalHandler(event) {
	if (event.target.classList.contains('modal')) closeCallModalHandler();
}

function openFeedbackModalButtonClickHandler() {
	feedbackModal.classList.add('modal--open');

	feedbackModal.addEventListener('click', closeFeedbackOverlayClickModalHandler);

	feedbackCloseBtn.addEventListener('click', closeFeedbackModalHandler)

	document.addEventListener('keyup', closeFeedbackModalHandler);
}

function closeFeedbackModalHandler() {
	feedbackModal.classList.remove('modal--open');

	feedbackModal.removeEventListener('click', closeFeedbackOverlayClickModalHandler);

	feedbackCloseBtn.removeEventListener('click', closeFeedbackModalHandler)

	document.removeEventListener('keyup', closeFeedbackModalHandler);
}

function closeFeedbackOverlayClickModalHandler(event) {
	if (event.target.classList.contains('modal')) closeFeedbackModalHandler();
}

callOpenBtns.forEach(function(btn) {
	btn.addEventListener('click', openCallModalButtonClickHandler)
});

feedbackOpenBtns.forEach(function(btn) {
	btn.addEventListener('click', openFeedbackModalButtonClickHandler)
});
