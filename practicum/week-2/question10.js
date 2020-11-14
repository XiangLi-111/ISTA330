/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {

    min = Math.abs(input[1] - input[0]);
    store = []
    // console.log(store);

    input.forEach((value, i) => {
        // console.log('value', value, 'store', store);

        // console.log(value,i);

        for (let index = i + 1; index < input.length; index++) {

            // console.log(index, input[index], value);
            if(Math.abs(input[index] - value) < min){
                min = Math.abs(input[index] - value)
                // console.log(min);
                store = [];
                store.push([value, input[index]]);
            }else if(Math.abs(input[index] - value) === min){
                // console.log(min);

                store.push([value, input[index]]);
            }
        }

    })

    store.forEach((ele) => {
        if(ele[0] > ele[1]){
            big = ele[0];
            ele[0] = ele[1];
            ele[1] = big;
        }
    })


    res = [];
    collection = [];
    store.forEach((ele) => {
        collection.push(ele[0]);
    });
    collection.sort();
    // console.log(collection);

    collection.forEach(e => {
        res = res.concat(store.filter(ele => 
            ele[0] === e 
        ))
    })

    // console.log(res);

    return res;


};