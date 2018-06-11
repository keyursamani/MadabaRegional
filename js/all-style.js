$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$(".custnav .menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 991) {
	        $(".custnav .menus").css({"display":"block"});
	    }
	    else
	    {
	        $(".custnav .menus").css({"display":"none"});
	    }
	}
	$(window).resize(function() {
		setTimeout(function(){nav();},0);
	});

	$("header .searchbar .search").click(function(){
		$(".searchpopup").addClass("popupactive");
	});

	$(".closebtn").click(function(){
		$(".searchpopup").removeClass("popupactive");
	});

	$(function() {
	  $("#projects .titlebox").addClass("zoomanimt");
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	   	if (scroll > 80) {
	        $("#header").addClass("header");
	    } 
	    else {
	    	$("#header").removeClass("header");
	    } 
	    if (scroll > 400 && scroll < 1800) {
	        $("#projects .imgbox").addClass("zoomanimt");
	        $("#projects .texts").addClass("moveanimt");
	    } 
	    else {
	    	$("#projects .imgbox").removeClass("zoomanimt");
	    	$("#projects .texts").removeClass("moveanimt");
	    }
	    if (scroll > 2000 && scroll < 3300) {
	        $("#loaction .locationimg").addClass("zoomanimt");
	        $("#loaction .info").addClass("moveanimt");
	    } 
	    else {
	    	$("#loaction .locationimg").removeClass("zoomanimt");
	    	$("#loaction .info").removeClass("moveanimt");
	    }
	});

	$("#cslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:800,
        autoplayTimeout:2000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        }
	    }
    });

    $("#itemslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:600,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        768:{
	            items:2,
	        },
	        1200:{
	            items:3,
	        }
	    }
    });

    var matWidth = $("#loaction .locationimg img").width();
	var matHeight = $("#loaction .locationimg img").height();
	var matHWidth = matWidth / 2;
	var matHHeight = matHeight / 2;
	$("#loaction .locationimg img").css({
	  "height": matHeight,
	  "width": matWidth
	});
	$("#loaction").mousemove(function(e) {
	  $("#loaction .locationimg img").css("transform", "rotateX(" + (e.clientY - matHHeight) / matHHeight * 10 + "deg) rotateY(" + (e.clientX - matHWidth) / matHWidth * 10 + "deg)");
	});

	$("#loaction").mouseout(function() {
	  $("#loaction .locationimg img").css("transform", "rotateX(0) rotateY(0)");
	});
});
