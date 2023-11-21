let arr = [1, 1, 1, 1, 1, 1, 1, 2]; // => 2

// given an odd length array return the num thats not the same
function stray(numbers) {
  const counts = {};

  // Count the occurrences of each number
  numbers.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Find the number with a count of 1
  for (let num in counts) {
    if (counts[num] === 1) {
      return parseInt(num);
    }
  }
}

console.log(stray(arr));
