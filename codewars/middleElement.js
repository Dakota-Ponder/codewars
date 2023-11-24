const arr = [5, 10, 14];

// function that returns the index of the numerical element that lies between the
// other two elements
function gimme(triplet) {
  // sort the array
  let sortedTriplet = [...triplet].sort((a, b) => a - b);

  let middleElement = sortedTriplet[1];

  // return the second element
  return triplet.indexOf(middleElement);
}

console.log(gimme(arr));
