$(document).ready(function(){
	$("#ride").click(function(){
        $("#ride").animate({right: "54%", 
        	height: "130px"}, 1200);

     $( "#ride" ).click(function() {
         location.reload(true);
		});
    });

	$(document).ready(function(){
		$(".ufoabout").animate({bottom: '-=600%', right: '+=20%'}, 1000);
		$(".ufoabout").animate({bottom: '+=600%', left: '+=20%'}, 1000);
	});

	$("#sidebar").hover(function(){
		$("#sideout").toggle();
	});
	$("#sideout").mouseenter(function(){
		$("#sideout").show();
	});
	$("#sideout").mouseleave(function(){
		$("#sideout").hide();
	});
});
