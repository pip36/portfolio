$(document).ready(function(){
	$('.alert-main').css("width", "0%");
	$('.alert-main h1').hide();
	$('#gh-list-item').hide();
	$('#contact-list-item').hide();

//on load animations
	$('.alert-main').animate({
		"width" : "50%"
	}, 500, function(){
		$('.alert-main h1').fadeIn();
		$('#gh-list-item').fadeIn(function(){
			$('#contact-list-item').fadeIn(function(){
				$('.side-links').animate({
					"margin-right" : "10%"
				},500);
			});
		});
	});

//alert right animation
	$('.alert-right').css("width", "0%");
	$('.alert-right h2').hide();
	var animated = false;
	var pos = $('.alert-right').position();	
	$(window).scroll(function(){
		if (pos.top < $(window).height() + $(window).scrollTop() && animated == false){
			animated = true;
		    $('.alert-right').animate({
				"width" : "50%"
			}, 500, function(){
				$('.alert-right h2').fadeIn();
		
			});
	    }
	});
		
	
	
});