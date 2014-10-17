define(function() {
	return function(elem) {
		elem.innerHTML = 'G';
    window.BOAZSLETTERISGLOABAWL = elem;

    elem.style.color = '#ff69b4';
    elem.style.width = '30px';
    elem.style.height = '240px';

    setInterval(function(){
      var size = elem.style.width.substring(0, elem.style.width.length - 2);
      size++;

      elem.style.width = size + "px";

    }, 100);

    elem.style.background = "url('http://www.princessfonts.com/images/headers/letterG.gif') 10px -10px"
	};
});
