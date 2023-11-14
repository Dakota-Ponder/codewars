// Given a non-negative integer, 3 for example, return a string
// with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always
// be valid, i.e.no negative integers.

var countSheep = function (num) {
  // as long as the number is above 0
  // count sheep
  let sheepStr = "";

  if (num === 0) {
    return "";
  }
  // loop through the nums and output the string
  for (let i = 0; i < num; i++) {
    sheepStr += i + " sheep...";
  }
  return sheepStr;
};
