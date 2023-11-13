// given string capitalize the letters that occupy even indexes and odd indexes
// seperately. Index 0 will be even
// ex. => capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
// input is lowercase and no spaces
// return an array with evens capped and one with odds capped
function capitalize(s) {
  // split the string
  let charArr = s.split("");

  // create two arrays to hold the even and odd letters
  let evenArr = [];
  let oddArr = [];

  // loop through the array and add it to the arrays depending if its even or odd
  for (let i = 0; i < charArr.length; i++) {
    // check if even
    if (i % 2 === 0) {
      // add it to the even array
      evenArr.push(charArr[i].toUpperCase());

      // push the lowercase odd to the odd array
      oddArr.push(charArr[i]);
    } else {
      // the element is odd so add correct caps to odd array
      oddArr.push(charArr[i].toUpperCase());

      // push the lowercase to the even array
      evenArr.push(charArr[i]);
    }
  }
  return [evenArr.join(""), oddArr.join("")];
}
