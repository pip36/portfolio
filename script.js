var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        initiate();
    }
}, 10);

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


var initiate = function(){
	var element5 = document.getElementById('main-content');

	window.addEventListener("scroll", function(){
		if(checkVisible(element5)){
			element5.setAttribute("class", "container is-fluid main-container fadecolor");
		};		
	});
}



	



