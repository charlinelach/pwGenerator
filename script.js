// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowLetter = alphabet.toLowerCase();
var highLetter = alphabet.toUpperCase();

function generatePassword() {

  var length = prompt("How many password characters are you seeking?");
  
  // If they put a number out of the 8 to 128 Range.
  if ((length < 8) || (length > 128)) {
    alert("You may only have a password from 8 to 128 characters!");
  }

  var confirmLow = prompt("Do you want lowercase letters in it?");
  var confirmHigh = prompt ("Do you want uppercase letters?");

  for (var pwBuild = 0; pwBuild < length; pwBuild++)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
