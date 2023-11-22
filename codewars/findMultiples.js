function findMultiples(integer, limit) {
  // function that takes a value and returns a list of its multiples
  // [2,4,6]
  let multiples = [];

  // create a loop starting from 1 and ending at the limit
  for (let i = 2; i <= limit; i += integer) {
    // push the integer to the multiples array
    multiples.push(i);
  }
  return multiples;
}
console.log(findMultiples(2, 6));
