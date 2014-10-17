define(function() {
	return function (elem) {
		var iframe = document.createElement("iframe");
		iframe.src = "https://dl.dropboxusercontent.com/u/3531958/see-arl-digital.html";
		iframe.seamless = true;
		iframe.style.width = "90px";
		iframe.style.height = "135px";
		elem.appendChild(iframe);
	};
});
