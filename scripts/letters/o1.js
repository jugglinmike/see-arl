define(function() {
	return function(elem) {
    var canvas = document.createElement('canvas');
    elem.appendChild(canvas);
    elem.style.verticalAlign = 'middle';
    var c = canvas.getContext('2d');
    var count = 0;
    var size, half;
    // Set the canvas size.
    function setSize(s) {
      size = canvas.width = canvas.height = s;
      half = size / 2;
    }
    setSize(150);
    // Get a HSLa string with optional hue offset.
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
    // Animate resizing canvas.
    var resizeTo;
    function resizeCanvas() {
      if (resizeTo == null) {
        return;
      } else if (Math.abs(resizeTo - size) < 0) {
        setSize(resizeTo);
        endSize = null;
      } else {
        setSize(size + (resizeTo - size) * .2);
      }
    }
    // Resize canvas on mouse enter/leave.
    elem.addEventListener('mouseenter', function(event) { resizeTo = 800; }, false);
    elem.addEventListener('mouseleave', function(event) { resizeTo = 150; }, false);
    // Loop!
    (function loopy(){
      requestAnimationFrame(loopy);
      count++;
      resizeCanvas();
      blankCanvas();
      drawDonut();
      for (var i = 0; i < size / 3; i++) {
        drawCircle();
      }
    }());
	};
});
