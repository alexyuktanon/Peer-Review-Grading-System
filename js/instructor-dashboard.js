/* Yuwei
 * Global variables to store data for "reset"&"cancel"
 * 1.ID can be only a number. Name of the element not needed.
 */
//var rstring;
//var rdate;
//var rclock;
//var sstring;
//var sdate;
//var sclock;
//var gtring;
//var gdate;
//var gclock;
//var max_score;
//var num_graders;
//var instruction;

/*
 * Yuwei
 * My toString of date
 */
function dateToString(date){
	var monthNumber= ["January", "February", "March", "April", "May",
	                  "June", "July", "August", "September", "October",
	                  "November", "December"];
	var hours = date.getHours();
	var mid='AM';
	if(hours==0){ //At 00 hours we need to show 12 am
		hours=12;
	}
	else if(hours>12){
		hours=hours%12;
		mid='PM';
	}
	if(hours<10){
		hours="0"+hours;
	}
	minutes = date.getMinutes();
	if(minutes<10){
		minutes = "0"+minutes;
	}
	var string = monthNumber[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+" "+hours+":"+minutes+" "+mid;
	return string;
}

/*
 * Yuwei
 * function for save button
 */
function saveEdit(boxId, assignmentFullID){
	$("#realease_date_picker_"+boxId).addClass("hide");
	$("#submission_date_picker_"+boxId).addClass("hide");
	$("#grading_date_picker_"+boxId).addClass("hide");
	$("#realease_clock_picker_"+boxId).addClass("hide");
	$("#submission_clock_picker_"+boxId).addClass("hide");
	$("#grading_clock_picker_"+boxId).addClass("hide");
	
	var release_date_span = $(".release_date_"+boxId);
	var submission_date_span = $(".submission_date_"+boxId);
	var grading_date_span =$(".grading_date_"+boxId);
	var rdp= $(".rdp"+boxId);
	var sdp= $(".sdp"+boxId);
	var gdp= $(".gdp"+boxId);
	var rcp= $(".rcp"+boxId);
	var scp= $(".scp"+boxId);
	var gcp= $(".gcp"+boxId);
	var rdval = rdp.val();
	var sdval = sdp.val();
	var gdval = gdp.val();
	var rcval = rcp.val();
	var scval = scp.val();
	var gcval = gcp.val();
	var rdate = new Date(rdval+" "+rcval);
	var sdate = new Date(sdval+" "+scval);
	var gdate = new Date(gdval+" "+gcval);
	release_date_span.text(dateToString(rdate));
	submission_date_span.text(dateToString(sdate));
	grading_date_span.text(dateToString(gdate));
	release_date_span.show();
	submission_date_span.show();
	grading_date_span.show();
	$(".save_btn_"+boxId).hide();
	$(".cancel_btn_"+boxId).hide();
	removeGreyIcon(assignmentFullID);
}

/*
 * Yuwei
 * function for cancel button
 */
function cancelEdit(boxId, assignmentFullID){
	$("#realease_date_picker_"+boxId).addClass("hide");
	$("#submission_date_picker_"+boxId).addClass("hide");
	$("#grading_date_picker_"+boxId).addClass("hide");
	$("#realease_clock_picker_"+boxId).addClass("hide");
	$("#submission_clock_picker_"+boxId).addClass("hide");
	$("#grading_clock_picker_"+boxId).addClass("hide");
	
	var release_date_span = $(".release_date_"+boxId);
	var submission_date_span = $(".submission_date_"+boxId);
	var grading_date_span =$(".grading_date_"+boxId);
//	release_date_span.text(dateToString(rdate));
//	submission_date_span.text(dateToString(sdate));
//	grading_date_span.text(dateToString(gdate));
	release_date_span.show();
	submission_date_span.show();
	grading_date_span.show();
	$(".save_btn_"+boxId).hide();
	$(".cancel_btn_"+boxId).hide();
	removeGreyIcon(assignmentFullID);
}

function removeGreyIcon(assignmentFullID){
	$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").removeClass("grey").css({'cursor': "pointer"});
	$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-icon-group > .glyphicon-pencil").removeClass("grey").css({'cursor': "pointer"});
}

$(document).ready(function() {

	//Toggle assignment box on dashboard
	$(".button-instructor-toggle").click(function() {
		var assignmentFullID = $(this).closest('.panel').attr('id');
		toggleAssignmentBox(assignmentFullID);
	});

	function toggleAssignmentBox(assignmentFullID){
		var assignmentID = assignmentFullID.substring(11);
		if($("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").hasClass("grey")){
		}else{
			$("#assignment-body-" + assignmentID).toggle("slow", function() {
				if( $("#assignment-body-" + assignmentID).is( ":hidden" ) ){
					$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").removeClass("glyphicon-minus");
					$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").addClass("glyphicon-plus");
				}else if( $("#assignment-body-" + assignmentID).is( ":visible" ) ){
					$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").removeClass("glyphicon-plus");
					$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").addClass("glyphicon-minus");				
				}
			});
		}
	}

	$(".glyphicon-pencil").click(function(){
		var assignmentFullID = $(this).closest('.panel').attr('id');
		if( $("#assignment-body-" + assignmentFullID.substring(11)).is( ":hidden" ) ){
			toggleAssignmentBox(assignmentFullID);
		}

		//Add grey icons and remove pointer
		$("#" + assignmentFullID + "> .panel-heading > .panel-top-bar > .panel-title > .button-instructor-toggle").addClass("grey").css({'cursor' :"default"});
		$(this).addClass("grey").css({'cursor' :"default"});

		var boxId=$(this).attr("id");

		$("#submitTable-"+boxId).removeClass().addClass("box box-warning").empty();
		$("<input>",{"type":"button","value":"cancel","class":"btn small cancel_btn_"+boxId,"name":"cancel","id":boxId}).appendTo("#submitTable-"+boxId);
		$("#submitTable-"+boxId).append("&nbsp;&nbsp;&nbsp;&nbsp;");    
		$("<input>",{"type":"button","value":"save","class":"btn btn-red small save_btn_"+boxId,"name":"comfirm","id":boxId}).appendTo("#submitTable-"+boxId);
		//Dynamically created btn should be binded with click function;
		$(".save_btn_"+boxId).on("click", function(){
			saveEdit(boxId, assignmentFullID);
		});
		$(".cancel_btn_"+boxId).on("click", function(){
			cancelEdit(boxId, assignmentFullID);
		});
		
		var release_date_span = $(".release_date_"+boxId);
		var submission_date_span = $(".submission_date_"+boxId);
		var grading_date_span =$(".grading_date_"+boxId);
		$prevReleaseDatetimeString = release_date_span.text().trim();
		var releaseDatetime = new Date($prevReleaseDatetimeString);
		console.log(releaseDatetime);
		$prevSubmissionDatetimeString = submission_date_span.text().trim();
		var submissionDatetime = new Date($prevSubmissionDatetimeString);
		console.log(submissionDatetime);
		$prevGradingDatetimeString = grading_date_span.text().trim();
		var gradingDatetime = new Date($prevGradingDatetimeString);
		release_date_span.hide();
		submission_date_span.hide();
		grading_date_span.hide();

		// set and show date_pickers;
		var rdp= $(".rdp"+boxId);
		var sdp= $(".sdp"+boxId);
		var gdp= $(".gdp"+boxId);
		rdp.datepicker('setValue',(releaseDatetime.getMonth()+1)+"/"+releaseDatetime.getDate()+"/"+releaseDatetime.getFullYear());
		sdp.datepicker('setValue',(submissionDatetime.getMonth()+1)+"/"+submissionDatetime.getDate()+"/"+submissionDatetime.getFullYear());
		gdp.datepicker('setValue',(gradingDatetime.getMonth()+1)+"/"+gradingDatetime.getDate()+"/"+gradingDatetime.getFullYear());
		$("#realease_date_picker_"+boxId).removeClass("hide");
		$("#submission_date_picker_"+boxId).removeClass("hide");
		$("#grading_date_picker_"+boxId).removeClass("hide");


		// set and show clock_pickers;
		var rcp= $(".rcp"+boxId);
		var scp= $(".scp"+boxId);
		var gcp= $(".gcp"+boxId);
		rcp.clockpicker();
		scp.clockpicker();
		gcp.clockpicker();
		rcp.children('.clock-value').val(releaseDatetime.getHours()+":"+releaseDatetime.getMinutes());
		scp.children('.clock-value').val(submissionDatetime.getHours()+":"+submissionDatetime.getMinutes());
		gcp.children('.clock-value').val(gradingDatetime.getHours()+":"+gradingDatetime.getMinutes());
		$("#realease_clock_picker_"+boxId).removeClass("hide");
		$("#submission_clock_picker_"+boxId).removeClass("hide");
		$("#grading_clock_picker_"+boxId).removeClass("hide");

		//By Becky
//		if($("#max-score-value_"+boxId).html()[0] != "<") {
//
//			var score = $("#max-score-value_"+boxId).html();
//			$("#max-score-value_"+boxId).html("<input type=\"text\" class=\"form-control\" style=\"margin:10px; width:70px\" id=\"edit-max-score\">");
//			$("#edit-max-score").val(score.trim());
//
//			var numGraders = $("#num-peer-graders_"+boxId).html();
//			$("#num-peer-graders_"+boxId).html("<input type=\"text\" class=\"form-control\" style=\"margin:10px; width:50px\"  id=\"edit-num-graders\">");
//			$("#edit-num-graders").val(numGraders.trim());
//
//			var instructions = $("#instructions_"+boxId).html();
//			$("#instructions_"+boxId).html("<textarea style=\"width:500px;height: 100px\" class=\"form-control\" id=\"edit-instructions\">" + instructions + "</textarea>");
//
//		}
	});
});
