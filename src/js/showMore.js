function setShowMoreListener(config) {
	config.btn.addEventListener('click', function(event) {
		if (config.inner.classList.contains(config.innerClassName)) {
			config.inner.classList.remove(config.innerClassName);

			event.target.innerText = config.lessTxt || 'Скрыть';
			event.target.classList.add('read-more-btn--less');

			return;
		}

		config.inner.classList.add(config.innerClassName);

		event.target.innerText = config.moreTxt || 'Показать все';
		event.target.classList.remove('read-more-btn--less');
	});
}

export default function() {
	let articleInner = document.querySelector('.article__desc-inner'),
		articleBtn = document.querySelector('.article__read-more-btn');

	if (articleInner && articleBtn) {
		setShowMoreListener({
			btn: articleBtn,
			inner: articleInner,
			innerClassName: 'article__desc-inner--short',
			moreTxt: 'Читать далее'
		})
	}

	let brandsInner = document.querySelector('.brands__list'),
		brandsBtn = document.querySelector('.brands__read-more-btn');

	if (brandsInner && brandsBtn) {
		setShowMoreListener({
			btn: brandsBtn,
			inner: brandsInner,
			innerClassName: 'brands__list--short'
		})
	}

	let typesInner = document.querySelector('.types__list'),
		typesBtn = document.querySelector('.types__read-more-btn');

	if (typesInner && typesBtn) {
		setShowMoreListener({
			btn: typesBtn,
			inner: typesInner,
			innerClassName: 'types__list--short'
		})
	}
}
