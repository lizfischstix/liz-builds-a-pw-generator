// Assignment code here
  
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

 var howLong = " ";
 var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', ']', '}', '<', '>', '?'];
 var superArray = [];

 function generatePassword() {
  var howLong = prompt("How many characters do you want?");
if((howLong < 8)||(howLong > 128)) {
  alert("Please choose a number between 8 and 128.");
}
  var upperCaseY = confirm("Do you want your password to contain upper case letters?")
  var lowerCaseY = confirm("Do you want your password to contain lower case letters?")
  var numberY = confirm("Do you wannt your password to contain numbers?")
  var specialY = confirm("Do you want your password to contain special characters?");
  
  if((upperCaseY === false)&&(lowerCaseY === false)&&(numberY === false)&&(specialY === false)) {
   alert("Please refresh the page and chose at least one option.");
} 
 
 if (upperCaseY) {
   superArray += upperCase;
 }

 if (lowerCaseY){
  superArray += lowerCase;
 }

 if (number){
  superArray += number;
 }

 if (special) {
  superArray += special;
 }
  for(i=0; i<howLong; i++){
    superArray[(Math.floor(math.random())*superArray.length)];
  }

  console.log(password);
  return password;
}