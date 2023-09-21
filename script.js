// Assignment code here
function makePassword(){

}
  var characters = prompt("How many characters do you want?");
if((characters < 8)||(characters > 128)) {
  alert("Please choose a number between 8 and 128.")
}
  var upperCase = confirm("Do you want your password to contain upper case letters?")
  var lowerCase = confirm("Do you want your password to contain lower case letters?")
  var number = confirm("Do you wannt your password to contain numbers?")
  var special = confirm("Do you want your password to contain special characters?")
if((upperCase === false)&&(lowerCase === false)&&(number === false)&&(special === false)){
  alert("Please refresh the page and chose at least one option.")
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