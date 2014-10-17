require.config({ paths: { 'jquery': 'http://code.jquery.com/jquery' } });
define(function(require) {
	var $ = require('jquery').noConflict();

	function randomColor() {
		return '#' + [1,2,3,4,5,6].map(function() {
			return '0123456789ABCDEF'.split('')[ Math.floor(Math.random() * 16) ];
		}).join('');
	}

	window.randomColor = randomColor;


	return function(elem) {
		$(elem).addClass('color-party');

		elem.innerHTML = 'i';

		setInterval(function() {
			$(elem).toggleClass('huge');
		}, 2000);

		setInterval(function() {
			$(elem).css('color', randomColor());
		}, 500);
	};
});
