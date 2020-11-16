/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {

    let arr = s.replace(/IV/g,"4,")
	arr = arr.replace(/IX/g,"9,")
	arr = arr.replace(/XL/g,"40,")
	arr = arr.replace(/XC/g, "90,")
	arr = arr.replace(/CD/g, "400,")
	arr = arr.replace(/CM/g, "900,")
	arr = arr.replace(/I/g, "1,")
	arr = arr.replace(/V/g, "5,")
	arr = arr.replace(/X/g, "10,")
	arr = arr.replace(/L/g, "50,")
	arr = arr.replace(/C/g, "100,")
	arr = arr.replace(/D/g, "500,")
    arr = arr.replace(/M/g, "1000,")
    
    let trr = arr.split(',') 
 
	var s = 0;
 
	for(let i= 0; i<trr.length;i++){
 
		s+=Number(trr[i])
 
	}
	return s



};