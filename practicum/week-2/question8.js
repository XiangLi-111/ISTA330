/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {

    max = -1;

    input.forEach((value, index) =>{
        newList = input.filter(ele => ele === value);
        // console.log(newList);

        newList.length === value && value > max ? max = value : null;


    })
    return max;

};