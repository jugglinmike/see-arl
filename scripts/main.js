define(function(require) {
	var letters = [
		require('letters/g1'),
		require('letters/r1'),
		require('letters/e1'),
		require('letters/e2'),
		require('letters/t1'),
		require('letters/i'),
		require('letters/n'),
		require('letters/g2'),
		require('letters/s1'),
		require('letters/f1'),
		require('letters/r2'),
		require('letters/o1'),
		require('letters/m'),
		require('letters/b'),
		require('letters/o2'),
		require('letters/c1'),
		require('letters/o2'),
		require('letters/u'),
		require('letters/p'),
		require('letters/f2'),
		require('letters/e3'),
		require('letters/s2'),
		require('letters/t2'),
		require('letters/c2'),
		require('letters/a'),
		require('letters/r3'),
		require('letters/l'),
	];

	letters.reduce(function(previous, addLetter) {
		var elem = document.createElement('div');
		elem.className = 'letter';
		document.body.appendChild(elem);
		return previous.then(addLetter.bind(null, elem));
	}, new Promise(setTimeout));
});
