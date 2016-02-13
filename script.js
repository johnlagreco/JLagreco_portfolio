$(document).ready(function(){
	$("button").click(function(){
        $("#ride").animate({right: "600px"}, 3000);
     $( "button" ).click(function() {
         location.reload(true);
		});
    });

		$("#sidebar > p ").click(function(){
	    $("#sideout").show();
	});	

		$("#sidebar > p ").click(function(){
	    $("#sideout").hide();
	});

	$("button").click(function(){
		$(".familyp2").fadeIn(4000);
		$(".familyp2").fadeOut(6000);
	});

});


// function toggle(#sideout){
// 	var e = document.getElementById(#sideout);
// 	if ( e.style.display == 'block' )
// 		e.style.display = 'none';
// 	else
// 		e.style.display = 'block';
// }