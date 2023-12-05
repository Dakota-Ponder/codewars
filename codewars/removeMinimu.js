const array = [2, 3, 4, 5, 1];

// function that removes the lowest number without changing the order or mutating list
function removeSmallest(numbers) {
  // create a copy of the OG array
  let numbersCopy = [...numbers];

  // find the smallest number
  let smallest = Math.min(...numbersCopy);

  // find the index of the first occurence of the smallest number
  let indexToRemove = numbersCopy.indexOf(smallest);

  // remove the first occurrence of the smallest number
  numbersCopy.splice(indexToRemove, 1);

  return numbersCopy;
}

console.log(removeSmallest(array));
