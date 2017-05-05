$(document).ready(function(){
  //the backend logic
  var change=function(x){

  };
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number=String(parseInt($("input#number").val()));
    if(number.match(/[0123456789]/)){
        $("#output").text(number);
    }
    else {
      var not="That's not a number";
      $("#output").text(not);
    }
  })
});
