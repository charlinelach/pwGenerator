// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Variables/arrays
  // var password = "";
  // var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var uppercase = lowercase.toUpperCase();
  // var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // var symbol = ["~", "!", "@", "#", "$", "%", "&", "-", "+", "=", "_"];

  var length = prompt("How many password characters are you seeking?");
  
  // If they put a number out of the 8 to 128 Range.
  if ((length < 8) || (length > 128)) {
    alert("You may only have a password from 8 to 128 characters!");
    return valid;
  }

  // Character type confirming
  var confirmLow = confirm("Do you want lowercase letters in it?");
  var confirmHigh = confirm("Do you want uppercase letters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSymbols = confirm("Do you want special characters?");

  if ((confirmLow = false) && (confirmHigh = false) && (confirmNumbers = false) && (confirmSymbols = false)) {
    alert("At least ONE character type must be selected.");
    return valid;
  }

  //alert if no criteria selected
  for (var pwBuild = 0; pwBuild < length; pwBuild++) {
    //random number, then pull IF confirmed
    //random letter, then pull IF confirmed

  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
