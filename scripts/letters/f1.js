require.config({ paths: { "jquery": "http://code.jquery.com/jquery" } });

define(function(require) {
  var $ = require("jquery").noConflict();
  var $elem;
  var colors = [
    '#000',
    '#666',
    '#3892DA',
    '#CE811E',
    '#AF1D92',
    '#867D35',
    '#C2408E',
    '#7E8AC5'
  ];
  var styles = [
    {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Georgia, serif',
      fontWeight: 'normal',
      fontStyle: 'italic'
    },
    {
      fontFamily: 'Papyrus, fantasy',
      fontWeight: 'normal',
      fontStyle: 'normal'
    },
    {
      fontFamily: 'Courier New, monospace',
      fontWeight: 'bold',
      fontStyle: 'normal'
    }
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

	return function(elem) {
		elem.innerHTML = 'f';

    $elem = $(elem);
    $elem.css({
      width: 30,
      display: 'inline-block',
      textAlign: 'center',
      fontSize: 29
    });
    

    var i = 0;
    window.setInterval(function() {
      $elem.css(styles[i]);
      $elem.css({
        color: colors[getRandomInt(0, colors.length-1)]
      });
      i++;
      if (i > styles.length - 1) { i = 0; }
    }, 600);
	};
});
