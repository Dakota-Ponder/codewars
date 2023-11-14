// Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function () {
  // your code here

  // loop through the string
  for (let i = 0; i < this.length; i++) {
    // check if i is upper case or not
    if (this[i] !== this.toUpperCase()) {
      return false;
    }
  }
  // if the loop finishes then return true
  return true;
};
