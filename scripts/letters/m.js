define(function() {
  return function (elem) {
    var videoUrl = "https://vine.co/v/OqxM2EZwEBg/embed/simple?audio=1";
    var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", videoUrl);
        iframe.style.width = 170+"px";
        iframe.style.height = 170+"px";
    elem.appendChild(iframe);
	};
});
