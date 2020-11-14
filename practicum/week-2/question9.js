/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {

    var count = new Object();

    for (let index = 1; index < n+1; index++) {
        let li = index.toString().split('');
        if(li.length > 1){
            // console.log(li);
            i = li.reduce((pre, curr) => {
                return parseInt(pre) + parseInt(curr)}, 0);
                // console.log(i);

            count[i] ? count[i] += 1 : count[i] = 1;
        }
        
    }

    let max = 0;

    // console.log(count);

    Object.values(count).forEach(ele =>
        ele > max ? max = ele : null);
    
    res = Object.values(count).filter(ele => ele === max).length;

    return res;
};