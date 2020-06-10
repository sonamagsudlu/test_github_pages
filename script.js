

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
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );


    
//Complete your function here...
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
if(typeof length == 'number'){
  console.log('it is!')
}
else{
 console.log('no')
}

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
if (length>=8){
  console.log('yes');
}
else {
  console.log ('no')
}

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length<=128){
    console.log('yes');
  }
  else {
    console.log ('no')

  // Variable to store boolean regarding the inclusion of special characters
  var specialChar = confirm('Have you included a special character (yes/no)')

  // Variable to store boolean regarding the inclusion of numeric characters
  var specialNumber= confirm('Have you included a  Number (yes/no)')
  // Variable to store boolean regarding the inclusion of lowercase characters
   var lowerCase = confirm('Have you included a lowercase (yes/no)')

  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCase = confirm('Have you included an uppercase (yes/no)')

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if(specialChar == false && specialNumber == false && lowerCase == false && upperCase == false){
    return 0
  }
}
}

getPasswordOptions()

// //   return getPasswordOptions;
// // }

// // Function for getting a random element from an array
// //Complete your function here...

// function firstFunction(x){
//   var math = x * X
//   return math
// }

// var number = firstFunction(2)
// console.log(number)
 

// // Function to generate password with user input
// function generatePassword() {
//   var options = getPasswordOptions();

//   var result = [];

//Complete your function here...






// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);


