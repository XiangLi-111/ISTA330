/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has ewual number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  let inputList = input.split('');
  let l = inputList.length;
  let count = 0;

  for (let i = 0; i < l - 1; i++) {
    // console.log(l);
    for (let j = i+1; j < l+1; j++) {
      // console.log(i, j);
      if( (j-i) % 2 !== 0){
        continue;
      }      
      subList = inputList.slice(i, j);
      // console.log(subList);

      front = subList.slice(0, subList.length/2);
      end = subList.slice(subList.length/2, subList.length);

      let findInFront = front.indexOf('a') === -1 ? 
        front.filter(ele => ele === 'b'):front.filter(ele => ele === 'a');
      
      // console.log(findInFront);

      let findInEnd = end.indexOf('a') === -1 ? 
        end.filter(ele => ele === 'b'):end.filter(ele => ele === 'a');
      // console.log(findInEnd);

      if(findInFront.length === findInEnd.length && findInEnd.length === subList.length/2 
        && front[0] !== end[0]){
        count += 1;
        i += subList.length;
        // console.log('count', count);
      }
    }
  }

  return count;

};