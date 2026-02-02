/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {

  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  const keys = Object.keys(result)
  for(let i=0 ; i< keys.length; i++){
    if(result[keys[i]] == 1){
      return keys[i]
    }
  }
  return null
  
}
module.exports = nonrepeat;
