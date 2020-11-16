/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    let set = new Set(A);
    let unique = Array.from(set);
    let uniqueToRunDown = unique;
    let move = 0;

    res = [];

    for (let index = 0; index < A.length; index++) {
        
    
        idx = uniqueToRunDown.indexOf(A[index]);
        // console.log(idx);
        if(idx !== -1){
            uniqueToRunDown.splice(idx, 1);
        }
       

        if(index === A.length - 1){
            // console.log(A[index], index);

            return move+1;}


        // console.log(A[index], uniqueToRunDown);
        if(uniqueToRunDown.length === 0 ){
            return move;
            // console.log(res); 
        }

        

        move ++;

        // if(A[index] in uniqueToRunDown){
        //     console.log(A[index],'zai', uniqueToRunDown)
        //     uniqueToRunDown.splice(uniqueToRunDown.indexOf(A[index]), 1);
        //     console.log(uniqueToRunDown);
        // }
        

    }


};