
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {

    res = [];
     
    input.forEach(element => {
        
        let list = input.filter(ele => ele === element);

        list.length > 1 ? res.push(element) : null;
    });

    let set = new Set(res);
    // console.log();
    return Array.from(set);
    
 };
