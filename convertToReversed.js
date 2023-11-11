// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  // convert the integer to a string
  let str = n.toString();

  // split the string into an array of chars
  let charsArr = str.split("");

  // convert the string back to in int array
  let intArr = charsArr.map(function (char) {
    return parseInt(char, 10);
  });

  return intArr.reverse();
}

// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
// }
// ex. => 35231 => [1,3,2,5,3]
//            0 => [0]
