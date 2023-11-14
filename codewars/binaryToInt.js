// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
const binaryArrayToNumber = (arr) => {
  // var to hold the result
  let result = 0;
  // loop through the array and keep track of the ones and zeros and what
  // spot they're in
  for (let i = 0; i < arr.length; i++) {
    // check if i is 1
    if (arr[arr.length - 1 - i] === 1) {
      // add 2^n to the result
      result += Math.pow(2, i);
    }
  }
  return result;
};
