// takes a non negative int and returns a list of all of the powers of 2
function powersOfTwo(n) {
  //   // array to hold list
  let powers = [];
  let power = 0;

  // from 0 to n multiply n i times
  for (let i = 0; i <= n; i++) {
    // check if i is 0
    if (i === 0) {
      powers.push(1);
    } else if (n >= 0) {
      power = Math.pow(2, i);
      powers.push(power);
    }
  }

  return powers;
}

console.log(powersOfTwo(3));
