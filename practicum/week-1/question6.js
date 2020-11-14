/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    input.sort();
    if (input.length % 2 === 0){
        let mid = input.length / 2;
        return (input[mid] + input[mid-1])/2;
    }else{
        let mid = (input.length - 1) / 2;
        return input[mid];
    }
};