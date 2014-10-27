/*
*	Yuwei
*	A class for encapsulate the time infomation;
*
*/
function Datetime(month, day, year, hour, minute, meridiem){
	var monthNames = {"January":1, "February":2, "March":3, "April":4, "May":5, "June":6,"July":7, "August":8, "September":9, "October":10
	, "November":11, "December":12};
	this.month = monthNames[month];
	this.day = day;
	this.year = year;
	this.hour = hour;
	this.minute = minute;
	this.meridiem = meridiem;
	this.getDate = function() {
		return this.month+"/"+this.day+"/"+this.year;
	};
	// Let's set the time to a 24-hour-system, so i don't have to care about the PM AM thing.
	this.getTime = function() {
		return this.hour+":"+this.minute;
	};
}

/*
*	Yuwei
*	parseDatetimeString is for parsing the datetime string into a class that contains each datetime value.
*
*/
function parseDatetimeString($datetimeString){
	var arrOfDTString = $datetimeString.split(" ");
	var month = arrOfDTString[0];
	var day = arrOfDTString[1].replace(",","");
	var year = arrOfDTString[2];
	var time = arrOfDTString[3];
	var tempArr = time.split(":");
	var hour = tempArr[0];
	var minute = tempArr[1];
	var meridiem = arrOfDTString[4];
	var datetime = new Datetime(month,day,year,hour,minute,meridiem);
	return datetime;
}

$(function() {

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

	$(".glyphicon-pencil").click(function(){
		var boxId=$(this).attr("id");
		var release_date_span = $(".release_date_"+boxId);
		var submission_date_span = $(".submission_date_"+boxId);
		var grading_date_span =$(".grading_date_"+boxId);
		$prevReleaseDatetimeString = release_date_span.text().trim();
		var releaseDatetime = parseDatetimeString($prevReleaseDatetimeString);
		$prevSubmissionDatetimeString = submission_date_span.text().trim();
		var submissionDatetime = parseDatetimeString($prevSubmissionDatetimeString);
		$prevGradingDatetimeString = grading_date_span.text().trim();
		var gradingDatetime = parseDatetimeString($prevGradingDatetimeString);
		release_date_span.hide();
		submission_date_span.hide();
		grading_date_span.hide();
		// set and show date_pickers;
		var rdp= $(".rdp"+boxId);
		var sdp= $(".sdp"+boxId);
		var gdp= $(".gdp"+boxId);
		rdp.datepicker('setValue',releaseDatetime.getDate());
		sdp.datepicker('setValue',submissionDatetime.getDate());
		gdp.datepicker('setValue',gradingDatetime.getDate());
		$("#realease_date_picker_"+boxId).removeClass("hide");
		$("#submission_date_picker_"+boxId).removeClass("hide");
		$("#grading_date_picker_"+boxId).removeClass("hide");
		$prevReleaseDatetimeString = release_date_span.text().trim();
		var releaseDatetime = parseDatetimeString($prevReleaseDatetimeString);
		$prevSubmissionDatetimeString = submission_date_span.text().trim();
		var submissionDatetime = parseDatetimeString($prevSubmissionDatetimeString);
		$prevGradingDatetimeString = grading_date_span.text().trim();
		var gradingDatetime = parseDatetimeString($prevGradingDatetimeString);

		// set and show clock_pickers;
		var rcp= $(".rcp"+boxId);
		var scp= $(".scp"+boxId);
		var gcp= $(".gcp"+boxId);
		rcp.clockpicker();
		scp.clockpicker();
		gcp.clockpicker();
		$("#realease_clock_picker_"+boxId).removeClass("hide");
		$("#submission_clock_picker_"+boxId).removeClass("hide");
		$("#grading_clock_picker_"+boxId).removeClass("hide");
	});

});
