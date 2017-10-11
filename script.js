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
	var element1 = document.getElementById('projects-alert');
	var element2 = document.getElementById('rails-alert');
	var element3 = document.getElementById('javascript-alert');
	var element4 = document.getElementById('android-alert');

	window.addEventListener("scroll", function(){
		if(checkVisible(element1)){
			element1.setAttribute("class", "alert-right slide");
		};
		if(checkVisible(element2)){
			element2.setAttribute("class", "alert-left slide-small");
		};
		if(checkVisible(element3)){
			element3.setAttribute("class", "alert-left slide-small");
		};
		if(checkVisible(element4)){
			element4.setAttribute("class", "alert-left slide-small");
		};		
	});
}



	



