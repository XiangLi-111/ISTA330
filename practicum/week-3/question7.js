/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {

  let maxX = M[0].length - 1;
  let maxY = M.length - 1;
  
  return mapPath(M, 0, 0, maxX, maxY, 0);
};

const mapPath = function(M, x, y, maxX, maxY, length) {
  const value = M[y][x];
  
  if (x === maxX && y === maxY) {
    return length + value;
  }
  
  const minX = (x < maxX)
    ? mapPath(M, x + 1, y, maxX, maxY, length + value)
    : Infinity;
  const minY = (y < maxY) 
    ? mapPath(M, x, y + 1, maxX, maxY, length + value)
    : Infinity;
  
  return Math.min(minX, minY);



  
};