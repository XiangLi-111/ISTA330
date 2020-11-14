/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {

    b = true;
    extreme = input[0];
    
    if(input[1] >= extreme){
        min = extreme;
        input.forEach(element => {
            if(element < min){b = false;}
            min = element;
            });
    }else{
        max = extreme;
        input.forEach(element => {
            if(element > max){b = false;}
            max = element;
            // console.log(max, element);
        });
    }

   

    return b;



};

console.log('hi');