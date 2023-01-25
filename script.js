// psuedo code

// Generate a password when the button is clicked
// * Present a series of prompts for password criteria

//  * Length of password:
// At least 10 characters but no more than 64.
//Prompt : How long would you like your password to be ? (10-64)

var passwordLength = prompt ("how long would your password be?")

console.log(passwordLength);
if(typeof(intVar) == 'number'){
console.log("well done!It's a number"); 
} else {
  console.log("you need to select a number");
}
// Validation:
// Ensure that input is numerical and falls within the required specification.

  // * Character types

   //  * Lowercase
    // confirm Prompt: Do you want lowercase in your password?

   // * Uppercase
   // Confirm prompt: Do you want uppercase character in your password?

   //  * Numeric
   // confirm Prompt: Do you want numeric character in your password?

    // * Special characters ($@%&*, etc)
    // confirm prompt : do you want Special character in your password?

// * Code should validate for each input and at least one character type should be selected
// minimum requirement> length of character and at least one character type

// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page
// 

// Array of special characters to be included in password






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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);