// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = lowercaseLetters.toUpperCase()
var  specialCharacters = "~`!@#$%^&*()_+-="
var theNumbers = "1234567890"

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create the displayed prompts
function createPassword() {
  var passwordLength = prompt("Please choose your password length between 8 and 128 characters");
  var hasUpperCase = confirm("Would you like your password to contain uppercase characters?");
  var hasNumbers = confirm("Would you like your password to contain numbers?");
  var hasSpecialChar = confirm("Would you like your password to contain special characters?");

  var charPool = lowercaseLetters;
  var  lengthAsInt = parseInt(passwordLength)

  var result = ""

  if(lengthAsInt >= 8 && lengthAsInt <=128) {
    if(hasUpperCase) {
      charPool += uppercaseLetters;
    }

    if(lengthAsInt >= 8 && lengthAsInt <= 128) {
      if(hasNumbers) 
        charPool += theNumbers
      }

      if(lengthAsInt >= 8 && lengthAsInt <= 128) {
        if (hasSpecialChar) 
          charPool += specialCharacters
      }

    for(var i = 0; i < lengthAsInt; i++) {  
      var index = Math.floor(Math.random() * charPool.length);
      result  += charPool[index]
    }

  }
  return result;

}























