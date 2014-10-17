require.config({ paths: { 'jquery': 'http://code.jquery.com/jquery' } });
  define(function(require) {
    var $ = require('jquery').noConflict();

    return function(elem) {
      var $el = $(elem)
      .addClass('color-party letter-g2')
      .html('g');

      function downhome() {
        $el.addClass('huge').html("'");
        setTimeout(function(){
          $el.toggleClass("huge medium");
          setTimeout(reset, 1500);
        },1500);
      }

      function reset() {
        $el.html("g");
        setTimeout(function() {
          $el.removeClass("huge medium");
          setTimeout(downhome, 1500);
        });
      }

      setTimeout(downhome,1500);

      setInterval(function() {
        $(elem).css('color', window.randomColor);
      }, 500);
      
    };

});
