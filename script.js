// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
  var passwordchoice = window.prompt("How many characters long do you want your password?");
  var characterlength = parseInt(passwordchoice);
  
  // Character strings being setup.
  var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var space = [];
  var randomgenpassword = "";

  if (isNaN(characterlength)) {
    window.alert("Please enter a number!");
    return
  } else {
    console.log("Number is valid.");
  }

  if (characterlength < 8) {
    window.alert("Password minimum is 8 characters long and the max is 128 characters long.");
    return
  } else if (characterlength > 128) {
    window.alert("Password minimum is 8 characters long and the max is 128 characters long.");
    return
  } else {
    console.log("Character length is valid.");
  }
  
  // Creating window promts.
  var enter;
  var confirmNumber = window.confirm("Click OK to include numbers.");
  var confirmCharacter = window.confirm("Click OK to include special characters.");
  var confirmUppercase = window.confirm("Click OK to include uppercase letters.");
  var confirmLowercase = window.confirm("Click OK to include lowercase letters.");
  var options;


  if (confirmCharacter) {
    space.push(character);
  }

  if (confirmNumber) {
    space.push(number);
  }

  if (confirmUppercase) {
    space.push(uppercase);
  }

  if (confirmLowercase) {
    space.push(lowercase);
  }

  if (space.length === 0) {
    space.push(character);
  }



  function random(min, max) {
    if (!max) {
      max = min
      min = 0
    }
    var randomly = Math.random()
    return Math.floor(min*(1- randomly) + randomly*max)
  }

  function generaterandom(list) {
    return list[random(list.length)]
  }


  for (var i = 0; i < characterlength; i++) {
    var listrandom = generaterandom(space);
    var letterrandom = generaterandom(listrandom);
    randomgenpassword += letterrandom
  }

  console.log(space)
  console.log(randomgenpassword)
  return randomgenpassword

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

