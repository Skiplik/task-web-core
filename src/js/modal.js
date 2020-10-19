const overlayForModal = document.querySelector('.overlay--modal'),
	openCallModalButton = document.querySelectorAll('.i-btn--call'),
	callModal = document.querySelector('.modal--call'),
	closeCallModalButton = document.querySelector('.call__close-btn'),
	openFeedbackModalButton = document.querySelectorAll('.i-btn--message'),
	feedbackModal = document.querySelector('.modal--feedback'),
	closeFeedbackModalButton = document.querySelector('.feedback__close-btn');

function openCallModal() {
	overlayForModal.classList.add('overlay--visible');

	callModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', calModalOverlayClickHandler);

	closeCallModalButton.addEventListener('click', closeCallModalButtonClickHandler);

	document.addEventListener('keydown', escapeKeydownModalHandler);
}

function closeCallModal() {
	callModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', calModalOverlayClickHandler);

	closeCallModalButton.removeEventListener('click', closeCallModalButtonClickHandler);

	document.removeEventListener('keydown', escapeKeydownModalHandler);
}

function openFeedbackModal() {
	overlayForModal.classList.add('overlay--visible');

	feedbackModal.classList.add('modal--open');

	overlayForModal.addEventListener('click', feedbackModalOverlayClickHandler);

	closeFeedbackModalButton.addEventListener('click', closeFeedbackModalButtonClickHandler);

	document.addEventListener('keydown', escapeKeydownModalHandler);
}

function closeFeedbackModal() {
	feedbackModal.classList.remove('modal--open');

	overlayForModal.classList.remove('overlay--visible');

	overlayForModal.removeEventListener('click', feedbackModalOverlayClickHandler);

	closeFeedbackModalButton.removeEventListener('click', closeFeedbackModalButtonClickHandler);

	document.removeEventListener('keydown', escapeKeydownModalHandler);
}

function openCallModalButtonClickHandler() {
	openCallModal();
}

function closeCallModalButtonClickHandler() {
	closeCallModal();
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

function escapeKeydownModalHandler(event) {
	if (event.keyCode !== 27) return;

	if (feedbackModal.classList.contains('modal--open')) {
		closeFeedbackModal();
	} else if (callModal.classList.contains('modal--open')) {
		closeCallModal();
	}
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
