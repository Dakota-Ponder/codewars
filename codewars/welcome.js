// Write a 'welcome' function that takes a parameter 'language',
// with a type String, and returns a greeting - if you have it in
// your database.It should default to English if the language is
// not in the database, or in the event of an invalid input.
function greet(language) {
  // define the database as an object with language as keys and greeting as values
  const database = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  // check if lang is a string
  // and convert to lowercase
  if (typeof language == "string" && database[language.toLowerCase()]) {
    // return the language
    return database[language.toLowerCase()];
  }

  // return english by default
  return database["english"];
}
