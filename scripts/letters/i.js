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

		setTimeout(function() {
			var intvl;
			setInterval(function() {
				if (intvl) {
					intvl = clearInterval(intvl);
					return;
				}
				intvl = setInterval(function() {
					var rotation = 'rotate(' + Math.floor( Math.random() * 360 ) + 'deg)';
					$(elem).css('transform', rotation);
				});
			}, 5000);
		}, 10000);
	};
});
