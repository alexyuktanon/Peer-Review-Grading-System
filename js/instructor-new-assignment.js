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
		$("#assignment-body-1").toggle("slow");
	});
	var rdp= $(".rdp");
	var sdp= $(".sdp");
	var gdp= $(".gdp");
	rdp.datepicker();
	sdp.datepicker();
	gdp.datepicker();
	$("#realease_date_picker").removeClass("hide");
	$("#submission_date_picker").removeClass("hide");
	$("#grading_date_picker").removeClass("hide");

	// set and show clock_pickers;
	var rcp= $(".rcp");
	var scp= $(".scp");
	var gcp= $(".gcp");
	rcp.clockpicker();
	scp.clockpicker();
	gcp.clockpicker();
	$("#realease_clock_picker").removeClass("hide");
	$("#submission_clock_picker").removeClass("hide");
	$("#grading_clock_picker").removeClass("hide");

});