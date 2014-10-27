$(function() {

  $("row").click(function() {
    $("#assignment-body-1").toggle("slow");
  });
  

  $("#button-edit-assignment").click(function() {

    if($("#max-score-value").html()[0] != "<") {

  	var score = $("#max-score-value").html();
    $("#max-score-value").html("<input type=\"text\" id=\"edit-max-score\">");
    $("#edit-max-score").val(score.trim());

    var numGraders = $("#num-peer-graders").html();
    $("#num-peer-graders").html("<input type=\"text\" id=\"edit-num-graders\">");
    $("#edit-num-graders").val(numGraders.trim());

    var insrtuctions = $("#instructions").html();
    $("#instructions").html("<textarea style=\"width:500px;height: 100px\"  id=\"edit-instructions\">" + instructions + "</textarea>");



  }

  });
  

});