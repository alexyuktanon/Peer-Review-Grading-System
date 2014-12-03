$(document).ready(function() {
  $("#form-main-login").submit(function(){
    event.preventDefault();
    var email = $("#form-email").val();
    var password = $("#form-password").val();

    if(email == "john@uci.edu" && password == "irvine2015"){
      window.location.href = "instructor-dashboard.html";
    }else if(email == "anakin@uci.edu" && password == "irvine2015"){
      window.location.href = "student-dashboard.html";
    }else{
      alert("Wrong username or password.");
    }
  });
});