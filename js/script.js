$(document).ready(function(){
  //the backend logic
  var countUp = function(countTo){
  var result = [];
  for(var i = 1; i <= countTo; i++){
     var index = result.indexOf(i);
     //checks if the number is divisible by both 3 and five first
       if((i % 3 === 0) && (i % 5 === 0)) {
        result.splice(index, 0);
        result.push('Pingpong');
        }
      // checks if the number is divisible by three if not by both five and itself
       else  if(i % 3=== 0) {
        result.splice(index, 0);
        result.push('ping');
        }
     //checks if the number is divisible by five
       else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
        }
       else{
        result.push(i);
        }
       }
       return result;
       };
//User Interface Logic
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number=String(parseInt($("input#number").val()));
    if(number.match(/[0123456789]/)){
    var result=countUp(number);
    result.forEach(function(num){
   $("#output").append('<li>' + num+ '</li>');
    });
    }
    else {
      var not="That's not a number";
      $("#output").text(not);
    }
  });
});
