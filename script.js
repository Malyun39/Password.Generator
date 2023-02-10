var passwordLength = prompt ("how long would your password be?")

console.log(passwordLength);
if(typeof(intVar) == 'number'){
console.log("well done!It's a number"); 
} else {
  console.log("you need to select a number");
}
var passwordIncludeLowercase = confirm ("do you want your password to include lower case?")

 var passwordIncludeUppercase = confirm ("do you want your password to include uppercase?")

var passwordIncludeNumbers = confirm ("do you want your password to include numbers?")

var passwordIncludeSpecialcharacter = confirm ("do you want your password to include special character?")

var passwordMinimumRequirement = confirm ("do you want minimum requirement ? ")

// if they chose lower allow
// add all the lower case nums to available option

var  hasPasswordOptionsSelected = hasPasswordOptionsSelected
var generatedPasswordArray = [];
  for (let index = 0; index < generatedPasswordArray.length; index++) {

    generatedPasswordArray.push(generatedPassword[index]);
  }
  
  let userPasswordOptions = new userPasswordOptions();{   

       userPasswordOptions.hasPasswordOptionsSelected = false;
  }
 
const newLocal = [];
var availableOptions = newLocal

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// function getPasswordOptions() {}

// function getRandom() {
//   // create a random number
//   // return that number
// }

function generatePassword() {}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password
  generateBtn.addEventListener('click'), (writePassword);

}


function getPasswordOptions() {
  console.log(passPrompt);
  while (isNaN(passPrompt) || passPrompt < 10 || passPrompt > 65) {
    if (passPrompt === null || passPrompt < 10 || passPrompt > 65) {
      return;
    }
    alert("Please enter a value between 10 and 65.");
    passPrompt = prompt("How many characters would you like your password to be?");
  }
  var randomizedGeneratedPasswordArray = generatedPasswordArray.sort(function (a, b) { return 0.5 - Math.random() })
  return randomizedGeneratedPasswordArray.join('');
}

getPasswordOptions();
function getRandom(arr) {
  return arr[Math.floor(Math.random() * array.length)];
}
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
function writePassword() {
  getPasswordOptions();
}

var generatedPasswordArray = [];
  for (let index = 0; index < generatedPassword.length; index++) {
    generatedPasswordArray.push(generatedPassword[index]);
  
  }
generateBtn.addEventListener('click', writePassword);

  var passwordText = document.querySelector('#password');
  
  function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector('#password');
  }
    