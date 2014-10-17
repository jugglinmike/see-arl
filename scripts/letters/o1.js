define(function() {
	return function(elem) {
    var canvas = document.createElement('canvas');
    elem.appendChild(canvas);
    elem.style.verticalAlign = 'middle';
    var c = canvas.getContext('2d');
    var size = canvas.width = canvas.height = 150;
    var half = size / 2;
    var count = 0;
    function getHSLa(offset) {
      var hue = count % 360 + (offset || 0);
      return 'hsla(' + hue + ',100%,50%,1)';
    }
    // Blank everything with slight opacity.
    function blankCanvas() {
      c.beginPath();
      c.rect(0, 0, size, size);
      c.fillStyle = 'rgba(255,255,255,0.5)';
      c.fill();
    }
    // Draw a donut.
    function drawDonut() {
      c.beginPath();
      c.arc(half, half, half, 0, 2 * Math.PI, false);
      var gradient = c.createRadialGradient(half, half, 1, half, half, half);
      gradient.addColorStop(0.25, '#fff');
      gradient.addColorStop(0.3, getHSLa());
      gradient.addColorStop(0.92, getHSLa());
      gradient.addColorStop(0.97, '#fff');
      c.fillStyle = gradient;
      c.fill();
    }
    // Draw a center-ish positioned circle of opposite hue than the donut.
    function drawCircle() {
      var devx = (Math.random() - 0.5) * size * .1;
      var devy = (Math.random() - 0.5) * size * .1;
      var x = half + devx;
      var y = half + devy;
      var devr = Math.random() * (1 - 0.3) + 0.3;
      var radius = (half - Math.max(Math.abs(devx), Math.abs(devy))) * devr;
      c.beginPath();
      c.arc(x, y, radius, 0, 2 * Math.PI, false);
      c.lineWidth = 1;
      c.strokeStyle = getHSLa(180);
      c.stroke();
    }
    // Loop!
    (function loopy(){
      requestAnimationFrame(loopy);
      count++;
      blankCanvas();
      drawDonut();
      for (var i = 0; i < 50; i++) {
        drawCircle();
      }
    }());
	};
});
