//  the dish must start and end with the same letters as the animal's name
function feast(beast, dish) {
  //your function here
  // assume that the string is always lowercase
  // and will always be at least 2 letters

  // grab the first and last elements
  let beastFirstChar = beast[0];
  let beastLastChar = beast[beast.length - 1];

  // grab the first and last elements
  let dishFirstChar = dish[0];
  let dishLastChar = dish[dish.length - 1];

  // check if the first and last elements match
  if (beastFirstChar === dishFirstChar && beastLastChar === dishLastChar) {
    return true;
  } else {
    return false;
  }
}
