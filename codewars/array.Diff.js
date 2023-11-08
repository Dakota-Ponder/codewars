// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a,
//which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be
//removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// first way using the filter method
// function arrayDiff(a, b) {
//   return a.filter(function (e) {
//     return !b.includes(e);
//   });
// }

// same way but using arrow functions
function arrayDiff(a, b) {
  // see if any of set a is in set b
  return a.filter((e) => !b.includes(e));
}

// different way using hashset
function arrayDiff(a, b) {
  let setB = new Set(b);

  return a.filter((e) => !setB.has(e));
}
