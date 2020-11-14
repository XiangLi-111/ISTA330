
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        let max = input[0];
        let newValue = max;

        for (let i = 0; i < input.length; i++) {
            for (let j = i+1; j < input.length+1; j++) {
                    sub = input.slice(i, j);
                    newValue = sub.reduce((prev, curr) => {
                        return (prev + curr)}, 0
                );
                newValue > max ? max = newValue : null;
                // console.log(max, i, j);
            }
                
        }
    

     return max;
    

 };
