/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function (input) {
  let max = 0;
  let maxIndex = 0;
  input.forEach((value, index) => {
    if (value > max) {
      max = value;
      maxIndex = index;
    }
  });

//   console.log(max, maxIndex);

  let newList = input.filter((value, index) => index !== maxIndex);
  let res = true;

  newList.map(ele => {
        ele * 2 > max ? (
            res = false
        ) : null;
  })

  return res;

};
