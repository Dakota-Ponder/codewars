// function capitalizes the first letter of the word
// minor words must always be lowercase unless first word
const string = "a clash of KINGS";
const minor = "a an the of";
function titleCase(title, minorWords) {
  // Check if minorWords is undefined and set to an empty string if it is
  minorWords = typeof minorWords !== "undefined" ? minorWords : "";

  // convert minor words into an array of strings
  const minorWordsArr = minorWords.toLowerCase().split(" ");

  // convert everything into lowercase
  const words = title.toLowerCase().split(" ");
  // ["a","clash","of","kings"]

  // loop through the string
  for (let i = 0; i < words.length; i++) {
    // Skip empty words
    if (words[i] === "") continue;
    // check if the current element is the first letter or if it is a minor word
    if (i === 0 || !minorWordsArr.includes(words[i])) {
      // captalize the first letter of the word
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  return console.log(words.join(" "));
}
titleCase(string, minor);
