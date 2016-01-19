$(document).ready(function(){
	$("button").click(function(){
        $("#ride").animate({right: "600px"}, 3000);
     $( "button" ).click(function() {
         location.reload(true);
		});
    });

	$("button").click(function(){
		$(".familyp2").fadeIn(4000);
		$(".familyp2").fadeOut(7000);
	});
});