
var Calculator=require ('./../js/script.js').calculatorModule;
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    $("li.remove").remove();
    var number=String(parseInt($("input#number").val()));
    if(number.match(/[0123456789]/)){
      //create an object of  a caluclator
      var simpleCalculator = new Calculator("hot pink");
    var result=simpleCalculator.pingPong(number);
    result.forEach(function(num){
   $("#output").append('<li class="remove">' + num+ '</li>');
    });
    }
    else {
      var not="That's not a number";
      $("#output").text(not);
    }
    $("form#pingpong")[0].reset();
  });
});
