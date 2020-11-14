/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let num = String(n).split('');
    let max = 0;
    let min = 9;
    num.map(ele => {
        if(ele > max){
            max = ele;
        }
        if(ele < min){
            min = ele;
        }
    });
    return max - min;

};