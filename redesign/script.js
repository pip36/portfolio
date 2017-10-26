var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        initiate();
    }
}, 10);


var initiate = function(){
	var doc = document.documentElement;
	var head = document.getElementById("nav");
	var top = 0;


	//Fading navbar on scroll
	window.addEventListener("scroll", function(){
		var currentTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		
		if(currentTop <= 0){
			head.setAttribute("class", "navbar");
		}else{
			//scrolled down
			if(currentTop > top){
				head.setAttribute("class", "navbar headfade headclose");
			}
			//scrolled up
			else if(currentTop < top){
				head.setAttribute("class", "navbar headfade");
			}
		}
		top = currentTop;
	});


//Open close navbar burger
    var navbarBurger = document.getElementById('burger');
  
	navbarBurger.addEventListener('click', function () {
	  var target = this.dataset.target;
	  var $target = document.getElementById(target);

	  // Toggle the class on both the "navbar-burger" and the "navbar-menu"
	  navbarBurger.classList.toggle('is-active');
	  $target.classList.toggle('is-active');

	});

}




