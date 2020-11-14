/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let n = input.length;
    let floor = Math.floor(n/2);
    let res = -1;

    input.forEach(ele=>{
        newList = input.filter((value)=>{
            return value===ele;
        })

        // console.log(newList);

        newList.length >= floor ? res = ele : null;
    })

    return res;

};