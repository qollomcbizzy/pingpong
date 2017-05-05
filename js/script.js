$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number=parseInt($("input#number").val());
    if(String(number).match(/[0123456789]/)){
        $("#output").text(number);
    }
    else {
      var not="That's not a number";
      $("#output").text(not);
    }
  })
});
