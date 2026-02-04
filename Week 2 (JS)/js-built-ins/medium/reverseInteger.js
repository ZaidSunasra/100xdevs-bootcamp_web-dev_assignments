/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {

  let isNegative = num < 0 ? true : false;
  let copyNum = isNegative ? num * -1 : num;
  let reverseNum = 0;

  while(copyNum){
    let remainder = copyNum % 10;
    reverseNum = reverseNum * 10 + remainder;
    copyNum = Math.floor(copyNum / 10);
  }

  return isNegative ? reverseNum * -1 : reverseNum

}

module.exports = reverseInteger;
