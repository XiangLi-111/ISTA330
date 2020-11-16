/*
Given a sing, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty sing as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {

  var re = /[`–``,`\s]/i;
  var s1 = s.toLowerCase().split(re).join("") ;
  var s2 = s1.split('').reverse().join('');  
  // s1 = s1.split(re).join("");
  // console.log(s1);
  // console.log(s2);

  return s1 === s2;


};