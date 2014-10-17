define(function() {
	return function(elem) {
		var jQuery = require("jquery");
		var elem = jQuery(elem).html('f');
		var dfd = jQuery.Deferred();
		var maxSize = 10;
		jQuery(document).on('mousemove', function(event) {
			dfd.resolve();
			var pos = elem.position();
			var mouse = { x: event.clientX, y: event.clientY };
			var diff = { x: pos.left - mouse.x + (elem.height() / 2), y: pos.top - mouse.y + (elem.width() / 2)};
			var dist = Math.pow( Math.pow(diff.x, 2) + Math.pow(diff.y, 2), 0.5 );
			var rot = -((Math.atan2(diff.x, diff.y) * 180 / Math.PI) + 180) % 360;
			var fontSize = (Math.log(dist)) * 10;
			maxSize = Math.max(fontSize, maxSize);
			elem.css({
				transform: 'rotate(' + rot + 'deg)',
				fontSize: fontSize + 'px',
				width: fontSize + 'px',
				height: fontSize + 'px',
				opacity: 1.3 - (fontSize / maxSize),
				color: '#' + ('0000000' + Math.random().toString(16)).substr(-6),
			});
		});
		return dfd.promise();
	};
});
