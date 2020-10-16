import '../scss/style.scss';
import initSlider from './slider';
import initShowMore from './showMore';
import initModal from './modal';
import initMenu from './menu';

document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('resize', initSlider);
	initSlider();
	initShowMore();
	initModal();
	initMenu();
});
