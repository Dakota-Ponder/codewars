// Given a non-empty array of integers,
// return the result of multiplying the values together in order.
// ex => [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
const array1 = [4, 1, 1, 1, 4];
function grow(x) {
  return x.reduce((acc, curr) => acc * curr, 1);
}
console.log(grow(array1));
