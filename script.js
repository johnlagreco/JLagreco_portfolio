$(document).ready(function(){
	$("button").click(function(){
        $("#ride").animate({right: "600px"}, 2000);
     $( "button" ).click(function() {
         location.reload(true);
		});
    });

	$("#sidebar").click(function(){
		$("#sideout").toggle();
	});

	$("button").click(function(){
		$(".familyp2").fadeIn(4000);
		$(".familyp2").fadeOut(6000);
	});

});
