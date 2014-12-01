

$(document).ready(function() {

	$("#button-instructor-toggle").click(function() {
		$("#assignment-body-1").toggle("slow", function() {
			if( $("#assignment-body-1").is( ":hidden" ) ){
				$("#button-instructor-toggle").removeClass("glyphicon-minus");
				$("#button-instructor-toggle").addClass("glyphicon-plus");
			}else if( $("#assignment-body-1").is( ":visible" ) ){
				$("#button-instructor-toggle").removeClass("glyphicon-plus");
				$("#button-instructor-toggle").addClass("glyphicon-minus");				
			}
		});
	});



});
