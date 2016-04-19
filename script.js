$(document).ready(function(){
	$("#ride").click(function(){
        $("#ride").animate({right: "600px"}, 2000);
     $( "#ride" ).click(function() {
         location.reload(true);
		});
    });

	$("#sidebar").click(function(){
		$("#sideout").toggle();
	});

	$("button").click(function(){
		$(".familyp2").fadeIn(3000);
		$(".familyp2").fadeOut(6000);
	});

});
