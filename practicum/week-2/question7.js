/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {

    let row = M.length
    let column = M[0].length

    // console.log(row, column);

    let res = [];

    for (let index = 0; index < column; index++) {
        let newList = [];
        for (let j = 0; j < row; j++) {
            newList[j] = M[j][index]
        }
        res.push(newList);
        // console.log(res);
        
    }

    return res;

};