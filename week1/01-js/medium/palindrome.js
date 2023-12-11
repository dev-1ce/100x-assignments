/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let b= a.split("").reverse().join("");
  return a===b
}

module.exports = isPalindrome;
