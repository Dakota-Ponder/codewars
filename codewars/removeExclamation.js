// Remove an exclamation mark from the end of a string. For a beginner kata,
// you can assume that the input data is always a string, no need to verify it.
function remove(string) {
  //coding and coding....
  // check if last char is a !
  if (string.endsWith("!")) {
    // remove the last char
    return string.slice(0, -1);
  } else {
    // return the og string if it doesn't end with !
    return string;
  }
}
