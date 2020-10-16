function closeMenu(event) {
	if (event.target.classList.contains('aside')) {
		event.target.classList.remove('aside--open');
		event.target.removeEventListener('click', closeMenu);

		let btn = event.target.querySelector('i-btn--close');
		if (btn) btn.removeEventListener('click', closeMenu)
	}

	if (event.target.classList.contains('i-btn--close')) {
		event.target.removeEventListener('click', closeMenu);

		let aside = event.target.closest('.aside')
		if (aside) {
			aside.classList.remove('aside--open');
			aside.removeEventListener('click', closeMenu)
		}
	}
}

export default function() {
	let burgerBtn = document.querySelector('.header__burger-btn'),
		aside = document.querySelector('aside')

	burgerBtn.addEventListener('click',function() {
		aside.classList.add('aside--open');

		if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1366)
			aside.addEventListener('click', closeMenu);

		let closeBtn = aside.querySelector('.i-btn--close')
		if (closeBtn) closeBtn.addEventListener('click', closeMenu)
	});
}
