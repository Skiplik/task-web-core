const showMoreOptionsList = [
	{
		container: document.querySelector('.article__desc-inner'),
		btn: document.querySelector('.article__read-more-btn'),
		containerClassName: 'article__desc-inner--short',
		btnTitle: 'Читать далее'
	},
	{
		container: document.querySelector('.brands__list'),
		btn: document.querySelector('.read-more-btn--brands'),
		containerClassName: 'brands__list--short'
	},
	{
		container: document.querySelector('.types__list'),
		btn: document.querySelector('.read-more-btn--types'),
		containerClassName: 'types__list--short'
	}
];

showMoreOptionsList.forEach(function(options) {
	options.btn.addEventListener('click', function() {
		if (options.container.classList.contains(options.containerClassName)) {
			options.container.classList.remove(options.containerClassName);

			options.btn.innerText = 'Скрыть';
			options.btn.classList.add('read-more-btn--less');

			return;
		}

		options.container.classList.add(options.containerClassName);

		options.btn.innerText = options.btnTitle || 'Показать все';
		options.btn.classList.remove('read-more-btn--less');
	});
})
