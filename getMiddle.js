// You are going to be given a word.
//Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
let s = "middle";

function getMiddle(s) {
  // split the string into an array
  let charArr = s.split("");

  // empty string
  let result = "";

  // get the middle elements
  let middle = Math.floor(charArr.length / 2);

  // if even return the middle element and the one before it
  if (charArr.length % 2 === 0) {
    result += charArr[middle - 1] + charArr[middle];
  } else {
    // if odd add just the middle element to the string
    result += charArr[middle];
  }

  // return the new string
  return result;
}

console.log(getMiddle(s));
