/*global $, window, document*/

$(document).ready(function () {
    "use strict";
	$(function () {
        
		var winh   = $(window).height(),
		    upperh = $(".uppre-bar").innerHeight(),
		    navh   = $(".nav").innerHeight();
        
	    $(".slider, .carousel-item").height(winh - (upperh + navh));
        
    });
    
    
    $(".featured-work ul li").on("click", function () {
        
		$(this).addClass("active").siblings().removeClass("active");
        
		if ($(this).data("class") === "all") {
            
			$(".featured-work .shufle .row .col-md").css('opacity', 1);
        } else {$(".featured-work .shufle .row .col-md").css('opacity', '0.3');
              
			    $($(this).data("class")).parent().css('opacity', 1);
              
			     }
		
	});
    
});