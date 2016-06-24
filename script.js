$(document).ready(function(){
	$("#ride").click(function(){
        $("#ride").animate({right: "54%", 
        	height: "130px"}, 1200);

     $( "#ride" ).click(function() {
         location.reload(true);
		});
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
