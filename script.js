// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";

// generate password

//create array for english characters
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseLetters = letters.split("");
var letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseLetters = letters2.split("");
var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"]
var numOfChars;

  //prompt 8-128 characters
  function generatePassword() {
    getPrompts();
    var pass = buildPassword();
    return pass;
  }

  function getPrompts() {
  numOfChars = prompt("how many charcters do you want?");
  specChars = prompt("do you want special characters?");
  }

  function buildPassword() { 
//check for number
  if(!isNaN(parseInt(numOfChars)) && numOfChars >=8 && numOfChars <=128){
  for(var i=0; i < numOfChars; i++){
    addCharFromArray(lowercaseLetters);
    addCharFromArray(uppercaseLetters);
    addCharFromArray(specialCharacters);
  }
}

return passwordResult;
}
//build password
function addCharFromArray(arr) {
  passwordResult += getRandomFromArray(lowercaseLetters);
  passwordResult += getRandomFromArray(uppercaseLetters);
  passwordResult += getRandomFromArray(specialCharacters);
}
function getRandomFromArray(arr) {
  return arr[parseInt(Math.random()*arr.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordResult = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var testing = "qR*kD*iK[jN}wG:pW?xC^uU:aE*kS{lE}wY{sL!pT{rL&&gT)eD~jM)wS^dT*aY)wX(fC~eR^pY*wP[yD{jH^aY||qQ(vA(gU*uJ&&lM]{pG+wM)fV:cU)dA!lG~aB]hQ^gZ~qZ[pE[eD!eI?gQ^rQ||xK]vS(mL*aH*"

console.log(testing.length)