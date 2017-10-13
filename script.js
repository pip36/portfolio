
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
	var element1 = document.getElementById('projects-head');
	var element2 = document.getElementById('rails-head');
	var element3 = document.getElementById('js-head');
	var element4 = document.getElementById('android-head');

	window.addEventListener("scroll", function(){
		if(checkVisible(element1)){
			element1.setAttribute("class", "sub-header fadesmooth");
		};	
		if(checkVisible(element2)){
			element2.setAttribute("class", "sub-header fadesmooth");
		};	
		if(checkVisible(element3)){
			element3.setAttribute("class", "sub-header fadesmooth");
		};	
		if(checkVisible(element4)){
			element4.setAttribute("class", "sub-header fadesmooth");
		};		
	});
}



	



