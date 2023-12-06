let list = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];

function twoSort(s) {
  // return the array in alphabetical order
  s.sort();

  // extract the first element of the array
  let first = s[0];

  // add '***' between each letter
  let newElement = "";

  // split the first string
  first = first.split("");
  // loop through the array
  for (let i = 0; i < first.length; i++) {
    // if the element is not the last one
    if (first[i] !== first[first.length - 1]) {
      newElement += first[i] + "***";
    } else {
      newElement += first[i];
    }
  }
  return newElement;
}

console.log(twoSort(list));
