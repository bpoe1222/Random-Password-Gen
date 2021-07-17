// Assignment code here

// arrays for pass gen

var number = "0123456789";
var specialCharacter = "!%&*+-./<?~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// variables for function

var passLength = "";
var confirmSpecial;
var confirmNumber;
var confirmLower;
var confirmUpper;
var passwordCharacters = ""

// begin function

function generatePassword() {
  var passLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  
    while(passLength < 8 || passLength > 128) {
      window.alert("Password length must be between 8 and 128 characters. Please try again!");
      var passLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    }

  // alert to confirm length

    window.alert("Your password will have " + passLength + " characters.")
  
  var confirmSpecial = window.confirm("Click OK to confirm if you would like to include special characters.");
  var confirmNumber = window.confirm("Click OK to confirm if you would like to include a number.");
  var confirmLower = window.confirm("Click OK to confirm if you would like to include lower case characters.");
  var confirmUpper = window.confirm("Click OK to confirm if you would like to include upper case characters.");

  while(confirmSpecial === false && confirmNumber === false && confirmLower === false && confirmUpper === false) {
    window.alert("You must choose at least one parameter.");
    var confirmSpecial = window.confirm("Click OK to confirm if you would like to include special characters.");
  var confirmNumber = window.confirm("Click OK to confirm if you would like to include numbers.");
  var confirmLower = window.confirm("Click OK to confirm if you would like to include lower case characters.");
  var confirmUpper = window.confirm("Click OK to confirm if you would like to include upper case characters.");
  };

  var passwordCharacters = ""

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }

  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  }

  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }
  console.log(passwordCharacters);

  var randomPass = "";

  for (var i = 0; i < passLength; i++) {
    randomPass = randomPass + passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    console.log(randomPass);
  }
  return randomPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword();
