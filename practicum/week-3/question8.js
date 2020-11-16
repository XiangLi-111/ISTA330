/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/

var sortColors = function(input) {
    let redCount=0;
    let whiteCount=0;
    let blueCount=0;
    input.forEach( i => {
        // console.log(i);
        if(i==0) {redCount +=1; }
        else if(i==1) {whiteCount++;}
        else if(i==2) {blueCount++}
    });
    

    // console.log(redCount,whiteCount, blueCount);

    for(let i=0;i < input.length;i++){
        if(i<redCount){ input[i]=0;}
        else if(i<redCount+whiteCount) {input[i]=1;}
        else 
           { input[i]=2;}
    }

    return input;
}