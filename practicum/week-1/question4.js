/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var a = A.split('');
    var b = B.split('');
    var c = a.filter(ele => {
        return b.indexOf(ele) > -1}
    );
    var d = b.filter(ele => {
        return a.indexOf(ele) > -1}
    );
    
    if (c.length > d.length){
        return c.length;
    }else{
        return d.length;
    }

};