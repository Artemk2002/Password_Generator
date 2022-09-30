// Assignment code here
function generatePassword() {
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['@', '/', "'", '!', '#', ':', ',', '%', '+', ')','$', '^', '?', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var possibleCharacters = [];
  
    // Asks user for the lenght of the password that they want
    numCharacters = prompt("Chose the lenght of your password, between 8-128 charcaters.");
    if (numCharacters < 8 || numCharacters > 128) {
      return "Please choose between 8-128.";
    } else if (isNaN(numCharacters)) {
      numCharacters = prompt("Please enter a  number.");
    } else {
      alert("Your password will be " + numCharacters + " characters long.");
      
    }
    //Asks about lowercase letters
    hasLowercase = confirm("Do you want lowercase characters?");
    if (hasLowercase) {
      var turnToLowercase = alert("The password will include lowercase characters.");
    } else {
      alert("The password will NOT include lowercase characters.");
    }
    //Asks about uppercase letters
    hasUppercase = confirm("Do you want uppercase characters?");
    if (hasUppercase) {
      alert("The password will include uppercase characters.");
    } else {
      alert("The password will NOT include uppercase characters.");
    }
    //Asks about numbers
    hasNumbers = confirm("Do you want to use numbers?");
    if (hasNumbers) {
      alert("The password will include numbers.");
    } else {
      alert("The password will NOT include numbers.");
    }
    //Asks about special characters
    hasSpecial = confirm("Do you want special characters?");
    if (hasSpecial) {
      alert("The password will include special characters.");
    } else {
      alert("The password will NOT include special characters.");
    }
    //If the user doesnt choose any times of intergers
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return "Password not possible, please choose charcater type.";
    };
  
    // group selected characters for the passworc
    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    // pick random cards out of new pool for length of password
    let finalPassword = ""
    for (let i = 0; i < numCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      // or finalPassword += possibleCharacters[rng];
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
  };
  
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