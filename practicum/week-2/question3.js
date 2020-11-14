/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let first = [1];
  let second = [1,1];
  let res = [];

  if (n === 1) {
    return res.push(first);
  }

  else if (n === 2) {
    res.push(first);
    return res.push(second);
  }

  else{
    res = [];
    res.push(first);
    res.push(second);

    // console.log(res);

    lastList = second;
    // console.log(lastList);

    for (let index = 3; index < n+1; index++) {
      newList = [1];

      for (let j = 0; j < index - 2; j++) {
          newList.push(lastList[j] + lastList[j+1]);  
          // console.log(index, j, newList);
      }


      newList.push(1);
      // console.log(index, newList);


      lastList = newList;

      res.push(lastList);
    }

    return res;

  }



};