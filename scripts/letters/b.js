// Z
require.config({ paths: { "jquery": "http://code.jquery.com/jquery" } });

define(function(require) {
	var $ = require("jquery").noConflict();

	var colors = [
		// Simple RGB
		// '#ff0000',
		// '#ff8800',
		// '#ffff00',
		// '#88ff00',
		// '#00ff00',
		// '#00ff88',
		// '#00ffff',
		// '#0088ff',
		// '#0000ff',
		// '#8800ff',
		// '#ff00ff',
		// '#ff0088'

		// D3 Ordinals
		// https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20b
		'#393b79',
		'#5254a3',
		'#6b6ecf',
		'#9c9ede',
		'#637939',
		'#8ca252',
		'#b5cf6b',
		'#cedb9c',
		'#8c6d31',
		'#bd9e39',
		'#e7ba52',
		'#e7cb94',
		'#843c39',
		'#ad494a',
		'#d6616b',
		'#e7969c',
		'#7b4173',
		'#a55194',
		'#ce6dbd',
		'#de9ed6'
	];

	return function(elem) {
		elem.innerHTML = '<canvas width="180" height="300" style="width: 90px; height: 150px; -webkit-mask-image: url(\'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><g><text x="0" y="150" font-family="serif" font-size="150">B</text></g></svg>') + '\'); mask: url(\'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="150"><mask id="b-mask"><text x="0" y="150" font-family="serif" font-size="150" fill="white">B</text></mask></svg>') + '#b-mask\');"></canvas>';
		var $canvas = $(elem).find('canvas');
		var canvas = $canvas[0];
		var ctx = canvas.getContext('2d');

		var j = 0;
		var step = function _step() {
			requestAnimationFrame(step);
			for (var i = 0; i * 8 < 300; i++) {
				ctx.fillStyle = colors[(i + ((j / 3) | 0)) % colors.length];
				ctx.fillRect(0, i * 8, 300, 8);
			}
			if (++j > colors.length * 3) { j = 0; }
		};
		step();
	};
});
