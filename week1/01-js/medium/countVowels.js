/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let a = str.toLowerCase();
    let cnt = 0;
    for(let i = 0 ;i<a.length;i++)
    {
      if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u')
      cnt++;
    }
    return cnt;
}

module.exports = countVowels;