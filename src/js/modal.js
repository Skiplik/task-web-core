function setOpenModalListener(btn, form) {
	btn.addEventListener('click', function() {
		form.parentElement.classList.add('modal--open');

		if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1366)
			form.parentElement.addEventListener('click', closeModal);

		let btn = form.parentElement.querySelector('.i-btn--close');
		if (btn) btn.addEventListener('click', closeModal)
	})
}

function closeModal(event) {
	if (event.target.classList.contains('modal')) {
		event.target.classList.remove('modal--open');
		event.target.removeEventListener('click', closeModal);

		let btn = event.target.querySelector('i-btn--close');
		if (btn) btn.removeEventListener('click', closeModal)
	}

	if (event.target.classList.contains('i-btn--close')) {
		event.target.removeEventListener('click', closeModal);

		let modal = event.target.closest('.modal')
		if (modal) {
			modal.classList.remove('modal--open');
			modal.removeEventListener('click', closeModal)
		}
	}
}

export default function() {
	let callBtns = document.querySelectorAll('.i-btn--call'),
		callModal = document.querySelector('.call'),
		feedbackBtns = document.querySelectorAll('.i-btn--message'),
		feedbackModal = document.querySelector('.feedback');

	callBtns.forEach(function(btn) {
		setOpenModalListener(btn, callModal);
	});

	feedbackBtns.forEach(function(btn) {
		setOpenModalListener(btn, feedbackModal);
	});
}
