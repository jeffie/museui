$(document).ready(function(){
    
	$(".menu").height($(window).height()-$(".header").outerHeight(true)-5);
    $(".navigation .openable .text").addClass('menudown');
	
    $(".navigation .openable>a").click(function(){
        var par = $(this).parent('.openable');
        var sub = par.find("ul");
		var text = par.find($('span.text'));
		text.toggleClass('menuup');
		
        if(sub.is(':visible')){
            par.removeClass('active'); 
			
        }else{
            par.addClass('active');
			par.siblings().removeClass('active');
        }
        
        return false;
    });  

    $(".menu .navigation li").hover(
		function(){
			$(this).addClass("navhover");
		},
		function(){
			$(this).removeClass("navhover");
		}
	);
    $(".navigation li ul li").hover(
		function(){
			$(this).addClass("subnavhover");
		},
		function(){
			$(this).removeClass("subnavhover");
		}
	);
    $(".link_navPopMessages").click(function(){
        if($("#navPopMessages").is(":visible")){
            $("#navPopMessages").fadeOut(200);
        }else{
            $("#navPopMessages").fadeIn(300);
        }
        return false;
    });  

});
