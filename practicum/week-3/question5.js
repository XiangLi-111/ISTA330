/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    var res = [];
    var totalProduct = 1;
    for(var i = 0; i < input.length; i++){
      totalProduct = totalProduct * input[i];
    }
    for(var i = 0; i < input.length; i++){
      var timesSubstracted = 0;
      var divisor = input[i];
      var dividend = totalProduct;
      while(divisor <= dividend){
        dividend = dividend - divisor;
        timesSubstracted++;
      }
      res.push(timesSubstracted);
    }
    return res;
};

