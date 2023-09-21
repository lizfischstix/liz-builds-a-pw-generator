// Assignment code here
function makePassword() {
prompt("How many characters do you want?")
}

var characters = prompt("How many characters do you want?");
if((characters < 8) && (characters > 128)){
alert("Please choose a number between 8 and 128")
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