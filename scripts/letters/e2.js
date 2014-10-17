define(function() {
  return function (elem) {
    var videoUrl = "https://vine.co/v/OqYFYVTgM6z/embed/simple";
    var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", videoUrl);
        iframe.style.width = 150+"px";
        iframe.style.height = 150+"px";
    elem.appendChild(iframe);
  };
});
