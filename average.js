// function that calculates the avg in a list
let nums = [5, 5, 5, 5, 5];

function findAverage(array) {
  // avg = sum of elements / num of elements

  // check if array is empty
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(findAverage(nums));
