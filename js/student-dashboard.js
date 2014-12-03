

$(document).ready(function() {

	$("#button-instructor-toggle-1").click(function() {
		$("#assignment-body-1").toggle("slow", function() {
			if( $("#assignment-body-1").is( ":hidden" ) ){
				$("#button-instructor-toggle-1").removeClass("glyphicon-minus");
				$("#button-instructor-toggle-1").addClass("glyphicon-plus");
			}else if( $("#assignment-body-1").is( ":visible" ) ){
				$("#button-instructor-toggle-1").removeClass("glyphicon-plus");
				$("#button-instructor-toggle-1").addClass("glyphicon-minus");				
			}
		});
	});


	$("#button-instructor-toggle-2").click(function() {
		$("#assignment-body-2").toggle("slow", function() {
			if( $("#assignment-body-2").is( ":hidden" ) ){
				$("#button-instructor-toggle-2").removeClass("glyphicon-minus");
				$("#button-instructor-toggle-2").addClass("glyphicon-plus");
			}else if( $("#assignment-body-2").is( ":visible" ) ){
				$("#button-instructor-toggle-2").removeClass("glyphicon-plus");
				$("#button-instructor-toggle-2").addClass("glyphicon-minus");				
			}
		});
	});


	$("#button-instructor-toggle-3").click(function() {
		$("#assignment-body-3").toggle("slow", function() {
			if( $("#assignment-body-3").is( ":hidden" ) ){
				$("#button-instructor-toggle-3").removeClass("glyphicon-minus");
				$("#button-instructor-toggle-3").addClass("glyphicon-plus");
			}else if( $("#assignment-body-3").is( ":visible" ) ){
				$("#button-instructor-toggle-3").removeClass("glyphicon-plus");
				$("#button-instructor-toggle-3").addClass("glyphicon-minus");				
			}
		});
	});

});
