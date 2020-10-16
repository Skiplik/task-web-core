import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const containersList = [
	document.querySelector('.brands'),
	document.querySelector('.types'),
	document.querySelector('.prices')
]

const swiperOptions = {
	slidesPerView: 'auto',
	spaceBetween: 16,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
}

containersList.forEach(function(container) {
	if (document.documentElement.clientWidth < 768) {
		new Swiper(container, swiperOptions);
	}
});
