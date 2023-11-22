const string = "L5ND5N";

// given 1, 5, and 0 return I,S,and O
function correct(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      result += "I";
    } else if (string[i] === "5") {
      result += "S";
    } else if (string[i] === "0") {
      result += "O";
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(correct(string));
