import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const swiper = {
	brands: null,
	types: null,
	prices: null,
	options: {
		slidesPerView: 'auto',
		spaceBetween: 16,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	}
}

export default function() {
	if (document.documentElement.clientWidth >= 768) {
		if (swiper.brands) {
			swiper.brands.destroy(true, true);
			swiper.brands = null;
		}

		if (swiper.types) {
			swiper.types.destroy(true, true);
			swiper.types = null;
		}

		if (swiper.prices) {
			swiper.prices.destroy(true, true);
			swiper.prices = null;
		}

		return;
	}

	if (!swiper.brands)
		swiper.brands = new Swiper(document.querySelector('.brands'), swiper.options);

	if (!swiperTypes)
		swiper.types = new Swiper(document.querySelector('.types'), swiper.options);

	if (!swiper.prices)
		swiper.prices = new Swiper(document.querySelector('.prices'), swiper.options);
}
