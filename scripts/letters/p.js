require.config({ paths: { "jquery": "http://code.jquery.com/jquery" } });

define(function(require) {
  var $ = require("jquery").noConflict();

	return function(elem) {
    var $elem = $(elem);

    $elem.css({
      position: 'relative',
      width: '245px',
      height: '165px',
      color: 'white',
      fontSize: '10px',
      cursor: 'pointer',
      background: 'url(http://www.reactiongifs.com/r/cwpt.gif)'
    });

    $elem.on('click', function() {
      alert('Kid in the background going fuckin\' crazyyyyy!')
    });

    var $letter = $('<div>p</div>');
    $elem.append($letter);

    setInterval(function() {
      $letter.css({
        position: 'absolute',
        fontSize: Math.ceil(Math.random()*6)*18 + 'px',
        left: Math.ceil(Math.random()*200) + 'px',
        top: Math.ceil(Math.random()*40) + 'px'
      })
    },500)
	};
});


