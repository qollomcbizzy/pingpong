$(document).ready(function(){
  $("#signUp").submit(function(event){
    event.preventDefault();
    var inputedEmail=$("input#yourEmail").val();
    $("#signUp").hide();
    $("#output").prepend('<li>Thank you'+ inputedEmail+'we have received your email and has been stored');
    $("#signUp")[0].reset();
  });
});
