(function() {
	'use strict';
	var assignments = [
		['Boaz', 'g1'],
		['Crash', 'r1'],
		['Tyler', 'e1'],
		['Claire', 'e2'],
		['Yannick', 't1'],
		['Kadam', 'i'],
		['Rick', 'n'],
		['Tyler', 'g2'],
		['Irene', 's1'],
		['James', 'f1'],
		['Leo', 'r2'],
		['Ben', 'o1'],
		['Sue', 'm'],
		['Z', 'b'],
		['Mike', 'o2'],
		['Brenden', 'c1'],
		['Jasmin', 'o2'],
		['Jenn', 'u'],
		['Matt', 'p'],
		['Corey', 'f2'],
		['Bob', 'e3'],
		['Jory', 's2'],
		['Ashley', 't2'],
		['Greg', 'c2'],
		['Isaac', 'a'],
		['April', 'r3'],
		['Wilto', 'l']
	];
	var moduleIds = assignments.map(function(assignment) {
		return 'letters/' + assignment[1];
	});

	define(moduleIds, function() {
		moduleIds.reduce(function(previous, moduleId, idx) {
			var elem = document.createElement('div');
			elem.className = 'letter';
			elem.setAttribute('title', assignments[idx][0]);

			document.body.appendChild(elem);

			return previous.then(require(moduleId).bind(null, elem));
		}, new Promise(setTimeout));
	});
}());
