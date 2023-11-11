// given a string, if the letters are lowercase then return upper
// and vice versa
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  // var to hold the new string
  let newString = "";

  // split the OG string into an array of chars
  let splitStr = this.split("");

  //loop through the split str
  for (let i = 0; i < splitStr.length; i++) {
    // check what each char is
    if (splitStr[i] === splitStr[i].toLowerCase()) {
      // add the oppossite to the empty string
      newString += splitStr[i].toUpperCase();
    } else {
      newString += splitStr[i].toLowerCase();
    }
  }
  return newString;
};
