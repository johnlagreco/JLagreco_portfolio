$(document).ready(function(){
	$("#ride").click(function(){
        $("#ride").animate({right: "50%"}, 1500);
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
