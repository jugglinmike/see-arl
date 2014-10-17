define(function() {
  return function(elem) {
    function restartAnimation() {
      elem.classList.remove('c1');
      setTimeout(function() {
        elem.classList.add('c1');
      }, 1000 * 10);
    }

    elem.innerHTML = 'c';
    elem.classList.add('c1');

    elem.addEventListener('animationend', restartAnimation);
  };
});
