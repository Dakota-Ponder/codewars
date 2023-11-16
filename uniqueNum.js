// There is an array with some numbers. All numbers are equal except for one.
//Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const exArr = [1, 1, 1, 2, 1, 1];
// It’s guaranteed that array contains at least 3 numbers.
function findUniq(arr) {
  // compare the first two nums
  // if equal then not unique
  if (arr[0] === arr[1]) {
    // loop through the array starting with the 3rd element
    for (let i = 2; i < arr.length; i++) {
      // check if current element is different from the first element
      if (arr[i] !== arr[0]) {
        // if different then arr[i] is the unique element
        return arr[i];
      }
    }
  } else {
    // check the 1st and last item
    return arr[0] === arr[2] ? arr[1] : arr[0];
  }
}

console.log(
  findUniq([1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
);
