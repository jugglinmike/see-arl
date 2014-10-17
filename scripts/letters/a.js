
require.config({ paths: { 'jquery': 'http://code.jquery.com/jquery' } });
define(function(require) {
  var $ = require('jquery').noConflict();

  return function(elem) {
    $(elem).addClass('letter-a');

    elem.innerHTML = 'a';
  };
});