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

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@#$%^&*()_+{}[]:;<>,.?~\\/\\-";
var superArray = "";

function generatePassword() {
  var howLong = prompt("How many characters do you want?");

  if (howLong < 8 || howLong > 128 || isNaN(howLong)) {
    alert("Please choose number between 8 and 128.");
    return "";
  }

  var upperCaseY = confirm("Do you want your password to contain upper case letters?");
  var lowerCaseY = confirm("Do you want your password to contain lower case letters?");
  var numberY = confirm("Do you want your password to contain numbers?");
  var specialY = confirm("Do you want your password to contain special characters?");

  if (!upperCaseY && !lowerCaseY && !numberY && !specialY) {
    alert("Please select at least one option.");
    return "";
  }

  if (upperCaseY) {
    superArray += upperCase;
  }

  if (lowerCaseY) {
    superArray += lowerCase;
  }

  if (numberY) {
    superArray += number;
  }

  if (specialY) {
    superArray += special;
  }

  var password = "";
  for (let index = 0; index < howLong; index++) {
    password += superArray.charAt(Math.floor(Math.random() * superArray.length));
  }

  console.log(password);
  return password;
}
