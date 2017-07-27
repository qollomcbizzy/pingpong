(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{"./../js/script.js":2}],2:[function(require,module,exports){

  //the backend logic
  //to change the color of the calculator
  function Calculator(skinName){
    this.skin=skinName;
  }
  Calculator.prototype.pingPong=function(countTo){
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

//using node exports
exports.calculatorModule=Calculator;

},{}]},{},[1]);
